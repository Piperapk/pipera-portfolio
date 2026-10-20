/** @jest-environment node */
import { afterEach, beforeEach, describe, expect, it } from "@jest/globals";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { getPortfolioData } from "../lib/portfolio";

let root: string;
const body = "## Case\n\nA **real** problem.\n\n## Outcome\n\nA useful result.\n";
const metadata = "title: Example\nimage: /images/example.jpg\nimageAlt: Example screenshot\n";

function writeWork(slug: string, extra = "", content = body) {
  fs.writeFileSync(path.join(root, "content/work", `${slug}.md`), `---\n${metadata}${extra}---\n\n${content}`);
}

beforeEach(() => {
  root = fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-content-test-"));
  for (const directory of ["content/work", "content/open-source", "public/images"]) {
    fs.mkdirSync(path.join(root, directory), { recursive: true });
  }
  fs.writeFileSync(path.join(root, "public/images/example.jpg"), "fixture");
});

afterEach(() => {
  if (path.dirname(root) !== path.resolve(os.tmpdir()) || !path.basename(root).startsWith("portfolio-content-test-")) {
    throw new Error("Refusing to remove a path outside the temporary test directory");
  }
  fs.rmSync(root, { recursive: true, force: true });
});

describe("Markdown portfolio content", () => {
  it("preserves Markdown, tags, links and local assets", () => {
    writeWork("example", "order: 20\ntags: [React, TypeScript]\nlinks:\n  - label: Code\n    url: https://github.com/example/project\n    icon: /images/example.jpg\n");
    expect(getPortfolioData(root).works).toEqual([{
      slug: "example", title: "Example", order: 20, pinned: false,
      image: "/images/example.jpg", imageAlt: "Example screenshot",
      textCase: "A **real** problem.", textOutcome: "A useful result.",
      tags: ["React", "TypeScript"],
      links: [{ label: "Code", url: "https://github.com/example/project", icon: "/images/example.jpg" }],
    }]);
  });

  it("sorts pinned work first, then order, with a stable slug tie-break", () => {
    writeWork("z-last", "order: 10\n");
    writeWork("a-first", "order: 10\n");
    writeWork("pinned", "order: 100\npinned: true\n");
    writeWork("earlier", "order: 1\n");
    expect(getPortfolioData(root).works.map((work) => work.slug))
      .toEqual(["pinned", "earlier", "a-first", "z-last"]);
  });

  it("omits unfinished drafts and reads contribution bodies as Markdown", () => {
    fs.writeFileSync(path.join(root, "content/work/draft.md"), "---\ndraft: true\n---\nUnfinished");
    fs.writeFileSync(path.join(root, "content/open-source/example.md"), "---\ntitle: Contribution\n---\n\n- Added a feature\n- Fixed a bug\n");
    const data = getPortfolioData(root);
    expect(data.works).toEqual([]);
    expect(data.openSourceWorks[0]).toMatchObject({
      title: "Contribution", tags: [], links: [], order: 0,
      textBody: "- Added a feature\n- Fixed a bug",
    });
  });

  it("supports Windows line endings", () => {
    writeWork("example", "", body.replace(/\n/g, "\r\n"));
    expect(getPortfolioData(root).works[0].textOutcome).toBe("A useful result.");
  });

  it.each([
    ["title: First\ntitle: Second\n", "invalid front matter"],
    ["- not\n- a mapping\n", "metadata mapping"],
    ["title: [unterminated\n", "invalid front matter"],
  ])("rejects ambiguous or malformed YAML %s", (yaml, error) => {
    fs.writeFileSync(path.join(root, "content/work/example.md"), `---\n${yaml}---\n${body}`);
    expect(() => getPortfolioData(root)).toThrow(error);
  });

  it("requires a closing metadata delimiter", () => {
    fs.writeFileSync(path.join(root, "content/work/example.md"), `---\n${metadata}${body}`);
    expect(() => getPortfolioData(root)).toThrow("front matter must end with ---");
  });

  it("rejects excessive YAML alias expansion", () => {
    const aliases = `seed: &seed [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nlevel: &level [${Array(10).fill("*seed").join(", ")}]\nexpanded: [${Array(10).fill("*level").join(", ")}]\n`;
    fs.writeFileSync(path.join(root, "content/work/example.md"), `---\n${metadata}${aliases}---\n${body}`);
    expect(() => getPortfolioData(root)).toThrow("invalid front matter");
  });

  it("does not mistake headings inside fenced code for card sections", () => {
    writeWork("example", "", "## Case\n\n```markdown\n## Outcome\n```\n\n## Outcome\n\nResult");
    expect(getPortfolioData(root).works[0].textCase).toBe("```markdown\n## Outcome\n```");
  });

  it.each([
    ["missing Outcome", "## Case\n\nProblem", "body must contain"],
    ["empty Case", "## Case\n\n## Outcome\n\nResult", "Case section"],
    ["duplicate Case", `${body}\n## Case\nProblem`, "body must contain"],
    ["reversed sections", "## Outcome\nResult\n## Case\nProblem", "body must contain"],
  ])("rejects %s rather than publishing empty content", (_name, content, error) => {
    writeWork("example", "", content);
    expect(() => getPortfolioData(root)).toThrow(error);
  });

  it.each([
    ["pinned: yes\n", "pinned must be true or false"],
    ["draft: 'false'\n", "draft must be true or false"],
    ["order: first\n", "order must be an integer"],
    ["tags: React\n", "tags must be a list"],
    ["links: invalid\n", "links must be a list"],
    ["links:\n  - label: Code\n    url: javascript:alert(1)\n", "absolute http(s) URL"],
    ["links:\n  - label: Code\n    url: https://example.com\n    icon: /images/missing.svg\n", "does not exist"],
  ])("rejects invalid metadata %s", (extra, error) => {
    writeWork("example", extra);
    expect(() => getPortfolioData(root)).toThrow(error);
  });

  it.each(["https://example.com/image.jpg", "/../image.jpg", "//example.com/image.jpg", "/images/missing.jpg"])
    ("rejects invalid or missing image %s", (image) => {
      writeWork("example");
      const file = path.join(root, "content/work/example.md");
      fs.writeFileSync(file, fs.readFileSync(file, "utf8").replace("/images/example.jpg", image));
      expect(() => getPortfolioData(root)).toThrow(/content[\\/]work[\\/]example.md: image/);
    });
});
