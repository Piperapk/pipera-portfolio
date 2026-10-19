import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  OpenSourceWork,
  PortfolioData,
  PortfolioWork,
  ProjectBase,
  ProjectLink,
} from "../types/PortfolioData.Interface";

type Metadata = Record<string, unknown>;

function fail(file: string, message: string): never {
  throw new Error(`${file}: ${message}`);
}

function requiredText(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || !value.trim()) {
    fail(file, `${field} must be a non-empty string`);
  }
  return value.trim();
}

function booleanField(data: Metadata, field: string, file: string): boolean {
  if (data[field] === undefined) return false;
  if (typeof data[field] !== "boolean") {
    fail(file, `${field} must be true or false`);
  }
  return data[field] as boolean;
}

function localAsset(value: unknown, field: string, file: string, root: string): string {
  const asset = requiredText(value, field, file);
  if (!asset.startsWith("/") || asset.startsWith("//") ||
      asset.includes("\\") || asset.split("/").includes("..") ||
      /[?#%]/.test(asset)) {
    fail(file, `${field} must be a local /path under public/`);
  }
  const assetPath = path.join(root, "public", asset);
  if (!fs.existsSync(assetPath) || !fs.statSync(assetPath).isFile()) {
    fail(file, `${field} does not exist: public${asset}`);
  }
  return asset;
}

function baseProject(data: Metadata, slug: string, file: string, root: string): ProjectBase {
  const title = requiredText(data.title, "title", file);
  const order = data.order ?? 0;
  if (typeof order !== "number" || !Number.isSafeInteger(order)) {
    fail(file, "order must be an integer");
  }
  const tags = data.tags ?? [];
  if (!Array.isArray(tags)) fail(file, "tags must be a list");
  const links = data.links ?? [];
  if (!Array.isArray(links)) fail(file, "links must be a list");

  return {
    slug,
    title,
    order,
    tags: tags.map((tag, i) => requiredText(tag, `tags[${i}]`, file)),
    links: links.map((entry: unknown, i): ProjectLink => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
        fail(file, `links[${i}] must contain label and url`);
      }
      const link = entry as Metadata;
      const label = requiredText(link.label, `links[${i}].label`, file);
      const url = requiredText(link.url, `links[${i}].url`, file);
      try {
        if (!["http:", "https:"].includes(new URL(url).protocol)) throw new Error();
      } catch {
        fail(file, `links[${i}].url must be an absolute http(s) URL`);
      }
      return {
        label,
        url,
        ...(link.icon === undefined ? {} : {
          icon: localAsset(link.icon, `links[${i}].icon`, file, root),
        }),
      };
    }),
  };
}

function readCollection(root: string, collection: string) {
  const directory = path.join(root, "content", collection);
  return fs.readdirSync(directory).filter((name) => name.endsWith(".md")).sort().flatMap((name) => {
    const file = path.join("content", collection, name);
    const slug = name.slice(0, -3);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
      fail(file, "filename must use lowercase words separated by hyphens");
    }
    let parsed: ReturnType<typeof matter>;
    try {
      parsed = matter(fs.readFileSync(path.join(directory, name), "utf8"));
    } catch (error) {
      fail(file, `invalid front matter: ${error instanceof Error ? error.message : String(error)}`);
    }
    const data: Metadata = parsed.data;
    if (booleanField(data, "draft", file)) return [];
    return [{ file, slug, data, content: parsed.content.trim() }];
  });
}

function byOrder(a: ProjectBase, b: ProjectBase): number {
  return a.order - b.order || a.slug.localeCompare(b.slug);
}

function workSections(content: string, file: string) {
  const headings: { name: string; start: number; bodyStart: number }[] = [];
  let offset = 0;
  let fence: { marker: string; length: number } | undefined;
  for (const line of content.split("\n")) {
    const text = line.replace(/\r$/, "");
    const delimiter = text.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (fence) {
      if (delimiter && delimiter[1][0] === fence.marker &&
          delimiter[1].length >= fence.length && !delimiter[2].trim()) {
        fence = undefined;
      }
    } else if (delimiter) {
      fence = { marker: delimiter[1][0], length: delimiter[1].length };
    } else {
      const heading = text.match(/^## (Case|Outcome)[ \t]*$/);
      if (heading) headings.push({ name: heading[1], start: offset, bodyStart: offset + line.length + 1 });
    }
    offset += line.length + 1;
  }
  if (headings.length !== 2 || headings[0].name !== "Case" ||
      headings[1].name !== "Outcome" || content.slice(0, headings[0].start).trim()) {
    fail(file, "body must contain exactly ## Case followed by ## Outcome");
  }
  return {
    textCase: requiredText(content.slice(headings[0].bodyStart, headings[1].start), "Case section", file),
    textOutcome: requiredText(content.slice(headings[1].bodyStart), "Outcome section", file),
  };
}

// Called by getStaticProps only; content and filesystem code stay out of the browser bundle.
export function getPortfolioData(root = process.cwd()): PortfolioData {
  const works = readCollection(root, "work").map(({ file, slug, data, content }): PortfolioWork => {
    return {
      ...baseProject(data, slug, file, root),
      pinned: booleanField(data, "pinned", file),
      image: localAsset(data.image, "image", file, root),
      imageAlt: requiredText(data.imageAlt, "imageAlt", file),
      ...workSections(content, file),
    };
  }).sort((a, b) => Number(b.pinned) - Number(a.pinned) || byOrder(a, b));

  const openSourceWorks = readCollection(root, "open-source").map(({ file, slug, data, content }): OpenSourceWork => ({
    ...baseProject(data, slug, file, root),
    textBody: requiredText(content, "body", file),
  })).sort(byOrder);

  return { works, openSourceWorks };
}
