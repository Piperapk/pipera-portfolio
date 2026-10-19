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

Use Node.js 20.9 or newer (a current LTS release is recommended) and Yarn Classic 1.22.22.

```bash
yarn install
yarn dev
```

Open [localhost:3000](http://localhost:3000). The webpack flag in the dev/build scripts preserves the existing SVG configuration.

## Managing projects

Each project is one `.md` file in `content/work/`. The filename is its unique slug: use lowercase words separated by hyphens. Add its image to `public/media/work/`, then copy an existing project or use this example:
