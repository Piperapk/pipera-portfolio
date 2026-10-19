<div align="center">
<h3><b>ikrushkov.com</b></h3>
<h4>Portfolio website of Ivan Krushkov</h4>
<h1>
</div>

My [portfolio](https://ikrushkov.com/) is built with Next.js, TypeScript and Tailwind and deployed on Vercel. Project content lives in Markdown files in this repository; images are served from `public/`. No CMS, database, Cloudinary account or content API credentials are required to develop or build the site.

## Forking and using the repo
- If you want to distribute or use the code for your own project please get in touch first. It's not a problem, please just ask first.
- GitHub’s Terms of Service apply to this repo so you can freely fork it but id doesn't come with any permissions. 

## Getting started

Use Node.js 20.9 or newer (a current LTS release is recommended) and Yarn Classic 1.22.22. The `packageManager` field pins Yarn for Corepack/Vercel. Keep `yarn.lock` committed so Vercel installs the same dependencies.

```bash
yarn install --frozen-lockfile
yarn dev
```

Open [localhost:3000](http://localhost:3000). The webpack flag in the dev/build scripts preserves the existing SVG configuration.

## Managing projects

Each project is one `.md` file in `content/work/`. The filename is its unique slug: use lowercase words separated by hyphens. Add its image to `public/media/work/`, then copy an existing project or use this example:

```markdown
---
title: "My project"
order: 60
image: /media/work/my-project.jpg
imageAlt: "Screenshot of my project"
pinned: false
tags:
  - React
  - TypeScript
links:
  - label: Code
    url: https://github.com/your-account/your-project
    icon: /media/icon_github.svg
  - label: Website
    url: https://example.com
    icon: /media/icon_link.svg
---

## Case

Describe the problem the project addresses. **Markdown formatting** is supported.

## Outcome

Describe what you built and what it achieved.
```

- `title`, `image` and `imageAlt` are required. Image and icon paths start with `/` and refer to files inside `public/`; external URLs are not accepted for these fields.
- Pinned projects appear first. Within each group, lower `order` values appear first, with the filename breaking ties. `order` defaults to `0`; `pinned` defaults to `false`.
- `tags` and `links` default to empty lists. Link URLs must use `http://` or `https://`; link icons are optional.
- Add `draft: true` to hide a file while you work on it. Draft files are skipped before other fields are validated.
- Work files must contain non-empty `## Case` and `## Outcome` sections, in that order. These headings delimit the two card sections. Use `###` for subheadings.
- Descriptions support paragraphs, emphasis, lists, links and code. Raw HTML is displayed as text.
- For a new screenshot, use a reasonably sized, compressed image and include descriptive alt text. Large image replacements accumulate in Git history.

Open source contributions live in `content/open-source/`. They use the same title, order, tags, links and optional draft metadata. Their entire Markdown body is the description; images, pinned status and Case/Outcome headings are not needed. See `content/open-source/openrct2.md` for an example.

To edit or remove a project, edit or delete its Markdown file. Remove an image only when no other content uses it. New Markdown files are discovered automatically; no code changes are needed.

## Previewing and publishing

During development, refresh the page after saving a content file. Content is loaded by `getStaticProps` at production build time, so publishing an edit requires a new deployment. Push changes to a branch for a Vercel preview, then merge into your production branch to publish through the existing Git integration.

```bash
yarn test --runInBand
yarn typecheck
yarn lint
yarn build
yarn start
```

Production builds validate metadata, section structure, links and asset paths. Invalid published content fails the build with its filename instead of silently displaying an empty project list. Both project collections are generated from local files; Strapi and Cloudinary can be offline. Old `STRAPI_LOCAL_URL` deployment settings can be removed.
