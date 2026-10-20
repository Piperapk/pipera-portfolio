<div align="center">
<h3><b>ikrushkov.com</b></h3>
<h4>Portfolio website of Ivan Krushkov</h4>
<h1>
</div>

My [portfolio](https://ikrushkov.com/) is built with Next.js, TypeScript and Tailwind and deployed on Vercel. Project content lives in Markdown files in this repository; images are served from `public/`.

## Forking and using the repo

- If you want to distribute or use the code for your own project please get in touch first. It's not a problem, please just ask first.
- GitHub’s Terms of Service apply to this repo so you can freely fork it but id doesn't come with any permissions.

## Getting started

Use Node.js 24 LTS (`.nvmrc` pins 24.22.0) and Yarn Classic 1.22.22. The Node types match this runtime. With nvm-windows, run `nvm install 24.22.0` and `nvm use 24.22.0` before installing dependencies.

```bash
yarn install --frozen-lockfile
yarn dev
```

Open [localhost:3000](http://localhost:3000). Next.js uses its standard Turbopack build; images and SVG icons are served from `public/`.

```bash
yarn lint
yarn typecheck
yarn test --runInBand
yarn build
yarn start
yarn audit:production
```

`yarn typecheck` generates Next.js route types and runs the current TypeScript 7 native compiler. Microsoft's TypeScript 6 compatibility package supplies the compiler API still required by the Next.js ESLint integration. This setup uses Microsoft's supported npm aliases and keeps the `tsc` and `tsc6` commands separate.

The production dependency audit is clean as of 20 October 2026. `yarn audit` checks development dependencies too and currently reports two upstream advisories without published fixes; see the [upgrade and security report](docs/dependency-upgrade-2026-10-20.md) for the exact dependency paths and limits.

## Managing projects

Each project is one `.md` file in `content/work/`. The filename is its unique slug: use lowercase words separated by hyphens. Add its image to `public/media/work/`, then copy an [existing project](content/work/windows-system-monitor.md). Use YAML metadata between `---` delimiters and non-empty `## Case` and `## Outcome` sections. Duplicate YAML keys and excessive alias expansion are rejected. Set `draft: true` to hide unfinished work.

Open source contributions live in `content/open-source/`; their whole Markdown body supplies the description. Content is read at build time, so publishing edits requires a new deployment.
