# Dependency and security upgrade report

Date: 20 October 2026. Branch: `upgrade/latest-dependencies`. Baseline: `dev` at `4967800`.

## Outcome

The portfolio now uses the current stable Next.js and React releases, current styling and test tooling, ESLint 10, and TypeScript 7 validation. Versions were checked against the npm registry's `latest` tags on the report date; no canary or prerelease packages were selected.

The production dependency audit reports **zero known vulnerabilities**. The complete development dependency tree still has **two distinct upstream advisories without published fixes**. They are detailed below; this upgrade does not claim that every dependency is vulnerability-free.

The website still uses the Pages Router, build-time `getStaticProps`, Markdown project files, local images, and Vercel hosting. All six content files and the generated project data match the baseline.

## Versions

The old column records installed/locked versions rather than just the lower bounds in the old manifest.

| Package or tool | Before | After |
| --- | --- | --- |
| Next.js | 16.0.7 | 16.4.2 |
| React / React DOM | 19.1.1 | 19.3.1 |
| next-themes | 0.1.1 | 0.4.6 |
| Tailwind CSS | 3.4.17 | 4.3.3 |
| Tailwind PostCSS integration | Tailwind's old PostCSS plugin | `@tailwindcss/postcss` 4.3.3 |
| PostCSS | 8.5.6 | 8.5.31 |
| ESLint | 8.12.0 | 10.13.0 |
| eslint-config-next | 12.1.4 | 16.4.2 |
| TypeScript validation compiler | 5.9.2 | 7.0.2, through `@typescript/native` alias |
| TypeScript compiler API for integrations | 5.9.2 | `@typescript/typescript6` 6.0.2, through `typescript` alias |
| Jest / jest-environment-jsdom | 30.0.5 | 30.5.2 |
| @jest/globals | Transitive dependency | Explicit development dependency, 30.5.2 |
| @testing-library/react | 16.3.0 | 16.3.3 |
| @testing-library/jest-dom | 6.6.4 | 7.0.1 |
| @testing-library/dom | 10.4.2 | 10.4.2, already current |
| @types/react | 19.1.10 | 19.3.0 |
| @types/react-dom | 19.1.7 | 19.3.0 |
| @types/node | 24.2.1 | 24.19.2 |
| Markdown renderer | markdown-to-jsx 9.10.3 | 9.10.3, already current |
| YAML parser | gray-matter 4.0.3 and its transitive parser | yaml 2.9.1 |
| Node runtime requirement | >=20.9.0 | 24.x LTS; `.nvmrc` pins 24.22.0 |
| Yarn Classic | 1.22.22 | 1.22.22, unchanged |

Node API types deliberately use the latest **24.x** release to match the selected LTS runtime, rather than exposing Node 26 APIs to code that runs on Node 24. The TypeScript 6 package is the latest published Microsoft compatibility package; it is required for the current ESLint integration, not used as a substitute for TypeScript 7 validation.

Removed direct dependencies: `gray-matter`, `@svgr/webpack`, `glob`, and `autoprefixer`. The SVG loader and direct glob package were unused. Tailwind 4's PostCSS integration handles the relevant CSS processing without a separate Autoprefixer plugin. Some test tools still have their own transitive glob dependencies.

## Architectural and build changes

### Framework and deployment

`next dev` and `next build` now use Turbopack. The custom webpack/SVGR rules were removed after confirming that application code does not import SVGs as React components. Existing SVG icons remain ordinary files served from `public/` through `next/image`.

The unused `output: "standalone"` setting was removed. Builds now produce standard Next.js output, and `next start` works without the previous standalone-output warning. This matches the existing Vercel deployment model. The explicit 300-second static-generation timeout was retained from `dev`.

The build script generates route types, runs the TypeScript 7 compiler, and then invokes Next.js. Next.js also performs its own type check using the locally resolvable compatibility compiler. Neither type checking nor lint rules were disabled to pass the upgrade.

### TypeScript and linting

Microsoft's documented side-by-side aliases supply `tsc` from TypeScript 7 and `tsc6` plus the JavaScript compiler API from the compatibility package. `yarn typecheck` and `yarn build` explicitly run `tsc`, so production validation includes TypeScript 7. `tsconfig.json` now targets ES2022 instead of ES5.

The old `.eslintrc.json` was replaced by an ESLint flat config using the matching Next.js Core Web Vitals preset. Linting treats warnings as failures. The current Next.js preset includes compatibility handling for ESLint 10; some bundled plugins still declare older peer ranges, so Yarn prints peer warnings even though linting succeeds. This limitation is documented in the version-matched Next.js guide.

Next.js generated `AGENTS.md` during the development smoke test. It directs future coding agents to the documentation bundled with the installed Next.js version. It has no application runtime effect.

### Styling and rendering

Tailwind's official upgrade tool migrated the CSS entry point, PostCSS plugin, and affected component utility names. The existing JavaScript theme remains explicitly loaded with `@config`, preserving custom colors, fonts, shadows and animations.

The old raw `hh` and `pf` screen definitions became CSS custom variants, preserving hover-capable and fine-pointer behavior without generating invalid width queries. A compatibility base layer preserves the old default border color. Navigation background opacity now uses Tailwind 4 color-opacity utilities.

Tailwind 4's spacing selector changes exposed a margin interaction between project cards. Project collections now use flex `gap-10`, and their cards use full width with horizontal auto margins. This restores the original 40-pixel gaps. Desktop and mobile heading/image measurements match the baseline.

The styling upgrade adopts Tailwind 4's modern-browser requirements: Safari 16.4+, Chrome 111+, and Firefox 128+. No legacy-browser compatibility layer was introduced. [Tailwind browser requirements](https://tailwindcss.com/docs/upgrade-guide#browser-requirements)

### Content parsing

The loader now parses YAML directly with the current `yaml` package, removing gray-matter's older dependency chain. A small delimiter reader requires opening and closing `---` lines and a metadata mapping. Duplicate keys, malformed YAML and excessive alias expansion are rejected. The published-file schema, drafts, sorting, asset validation, and Case/Outcome sections retain their existing behavior.

The original Markdown files did not need conversion. Their hashes and generated project props were checked against the baseline.

### Notification lifecycle

The current React Hooks lint rules detected synchronous derived state updates in the Easter egg notification effect. The notification now mounts a child keyed by the discovered count, derives singular/plural text during render, and cleans up display/fade timers. A new discovery starts a fresh timer and cannot be hidden by an older notification's pending timeout. Manual dismissal and the longer final-notification duration are covered by tests.

## Security audit results

Audit commands were run against the regenerated Yarn lockfile on the report date. Machine-readable counts and remaining dependency paths are in [security-audit-2026-10-20.json](security-audit-2026-10-20.json).

| Scope / counting method | Before | After |
| --- | --- | --- |
| Distinct advisory IDs, all dependencies | 111 | 2 |
| Distinct critical advisories | 2 | 0 |
| Distinct high advisories | 64 | 1 |
| Distinct moderate advisories | 39 | 1 |
| Distinct low advisories | 6 | 0 |
| Yarn dependency-path findings, all dependencies | 469 | 9 |
| Production dependency findings | Not separately measured before | 0 |

Yarn's totals count dependency paths; they are not counts of distinct exploitable bugs. Forty baseline advisory IDs concerned the old Next.js version. Whether an individual advisory was exploitable depends on its affected features, configuration and deployment; this audit does not establish that the old portfolio was exploitable.

`yarn audit:production` exits successfully with no known findings. The full `yarn audit` still exits with code 12, as expected for the remaining moderate/high findings. No advisory suppression or forced incompatible transitive resolutions were added.

### Remaining development-only findings

| Package | Advisory | Dependency path | Published fix |
| --- | --- | --- | --- |
| braces 3.0.3 | High: stack-exhaustion denial of service, [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) | eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces | None |
| sprintf-js 1.1.3 | Moderate: unbounded precision denial of service, [GHSA-hp3w-g68c-fv3c](https://github.com/advisories/GHSA-hp3w-g68c-fv3c) | Jest / @jest/globals → instrumentation tooling → @istanbuljs/load-nyc-config → js-yaml → argparse → sprintf-js | None |

Both remain in the latest upstream development tools. They are absent from the production dependency group. This portfolio does not expose an endpoint that passes visitor-controlled patterns or format strings to these tools; linting and tests operate on repository-controlled inputs. Development/CI still executes these dependencies, so the findings remain real maintenance items. Re-audit and update when the upstream packages publish fixes; do not treat the production result as a guarantee of complete application security.

## Complete file change inventory

| File | Change |
| --- | --- |
| `package.json` | Current package versions, Node 24 requirement, TypeScript aliases, standard Turbopack scripts, explicit native type checking, production/full audit scripts, unused dependencies removed. |
| `yarn.lock` | Regenerated complete dependency graph, refreshing old transitive packages as well as direct dependencies. |
| `.nvmrc` | Added the validated Node 24.22.0 LTS version. |
| `.eslintrc.json` | Removed legacy ESLint configuration. |
| `eslint.config.mjs` | Added the supported flat config and generated-output ignores. |
| `next.config.js` | Removed unused webpack/SVGR, standalone output and empty Turbopack configuration; retained strict mode and static-generation timeout. |
| `tsconfig.json` | ES2022 target for the current compiler and runtime. |
| `next-env.d.ts` | Regenerated by Next.js; includes its new generated root-parameter types alongside route types. |
| `AGENTS.md` | Generated Next.js version-matched documentation guidance. |
| `postcss.config.js` | Switched to `@tailwindcss/postcss`; removed the old Tailwind and Autoprefixer plugins. |
| `styles/globals.css` | Tailwind 4 import, explicit theme config, pointer/hover custom variants, border-color compatibility layer. |
| `tailwind.config.js` | Removed raw pointer/hover screens now expressed as CSS variants. Other theme settings remain. |
| `lib/portfolio.ts` | Replaced front-matter dependency with bounded, strict YAML parsing and explicit delimiters. |
| `components/AboutMe.tsx` | Tailwind position and radius utility migration. |
| `components/Contact.tsx` | Tailwind gradient/position utility migration. |
| `components/EasterEggCounter.tsx` | Tailwind blur/gradient migration and notification timer/state refactor. |
| `components/HeroPage.tsx` | Tailwind small-border utility migration. The frosted-glass experiment remains removed. |
| `components/Navigation.tsx` | Tailwind border, blur, outline and translate utility migration; current background-opacity syntax. |
| `components/Resume.tsx` | Tailwind arbitrary negative-position utility migration. |
| `components/Work.tsx` | Replaced vertical spacing margins with flex gaps between cards. |
| `components/buttons/Button_Badge.tsx` | Tailwind outline/offset/inversion utility migration. |
| `components/buttons/Button_Primary.tsx` | Tailwind outline and outline-offset utility migration. |
| `components/buttons/Tooltip.tsx` | Tailwind arbitrary-position utility migration. |
| `components/buttons/Tooltip_Mobile.tsx` | Tailwind gradient utility migration. |
| `components/cards/Text_Card.tsx` | Tailwind gradient and border utility migration. |
| `components/cards/Work_Card.tsx` | Tailwind basis utility migration; explicit full-width/horizontal centering to preserve card spacing. |
| `components/cards/Work_Card_Small.tsx` | Tailwind gradient/border utility migration and explicit full-width/horizontal centering. |
| `__tests__/portfolio.test.ts` | Added malformed/duplicate/non-mapping YAML, missing-delimiter and excessive-alias cases. |
| `__tests__/easter-egg-counter.test.tsx` | Added timing, rediscovery during fade, manual dismissal and final-notification tests. |
| `README.md` | Updated runtime, install, build, validation, audit and content-editing instructions; linked this report. |
| `docs/security-audit-2026-10-20.json` | Recorded baseline and final audit counts, exit codes, and remaining advisory paths. |
| `docs/dependency-upgrade-2026-10-20.md` | This report. |

No project Markdown, image assets, CV, routes, or external account settings were edited. The global Node selection was not changed: validation used a checksum-verified official Node 24 archive extracted into a temporary directory.

## Validation

- Frozen-lockfile dependency installation verified; the final frozen check used `--ignore-scripts`, following an earlier full installation with lifecycle scripts enabled.
- `yarn tsc --version` reports 7.0.2; `yarn typecheck` passes.
- `yarn lint` passes with zero warnings.
- All 33 tests pass, up from 25 at baseline.
- The production build passes with Turbopack, including native TypeScript validation. The homepage is still SSG.
- Development server starts with Turbopack and returns all five projects and one contribution.
- Production page props match the saved baseline; all six Markdown hashes are unchanged.
- All five optimized project images, the CV download and the 404 response were checked over HTTP.
- Browser checks cover desktop, 390-pixel mobile layout, project navigation and light/dark switching. Heading and image geometry matches the baseline; card gaps are 40 pixels; no horizontal overflow or browser warnings/errors were observed.
- Full and production audits are reported separately above.

## Running and publishing

Use Node 24 LTS and Yarn Classic 1.22.22, then run:

```bash
yarn install --frozen-lockfile
yarn lint
yarn typecheck
yarn test --runInBand
yarn build
yarn audit:production
yarn start
```

Run `yarn audit` to include the currently unpatched development-tool findings. Vercel must use Node 24 for this branch. No remote push, merge or deployment is part of this upgrade.

## Primary references

- [Next.js upgrade guide](https://nextjs.org/docs/pages/guides/upgrading/version-16)
- [Next.js ESLint configuration](https://nextjs.org/docs/pages/api-reference/config/eslint)
- [Next.js October 2026 security update](https://nextjs.org/blog/nextjs-security-update-october-14-2026)
- [Tailwind CSS upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
- [Microsoft's TypeScript 7 side-by-side guidance](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
- [Node.js release lifecycle](https://nodejs.org/en/about/previous-releases)
- Official npm registry metadata and the installed Next.js version's bundled guides were also used to resolve versions and compatibility.
