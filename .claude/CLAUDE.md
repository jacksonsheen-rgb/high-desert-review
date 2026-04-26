# Project Guidelines

## Code Quality

The entire codebase MUST be fully clean before committing any code. `npm run check` must pass with zero errors, warnings, or hints — even from code that wasn't changed.

`npm run check` runs: `astro check && eslint . && prettier --check .`

## Commits

Use conventional commit messages (e.g. `feat:`, `fix:`, `chore:`). All text must be lowercase.

## Architecture & Design

- **`docs/spec.md`** — project spec (stack, pages, content, cms, ci/cd, non-goals). Read this before making structural changes.
- **`docs/design.md`** — design spec (philosophy, tokens, component styles, responsive approach). This is the single source of truth for all visual decisions.
- **`src/styles/global.css`** — the sole stylesheet. All design tokens are CSS custom properties on `:root`. No other files contain styling.
- All styling changes MUST follow `docs/design.md`. If the design spec doesn't cover a new element, extend the spec first, then implement.
- Do not add inline styles, scoped `<style>` blocks, or CSS classes to Astro components unless absolutely necessary. Keep styling centralized in `global.css`.
- `docs/spec.md` and `docs/design.md` must stay in sync with committed code at all times. Experimentation is fine, but any committed change that diverges from either doc must be reconciled before or at commit time. Prefer making the code compliant to the spec/design; if that is not feasible, update the spec/design to match the code.

## Subpath Deployment

The site supports deployment at a subpath (e.g. `example.com/blog`). All internal links must use the `Link` component (`src/components/Link.astro`), never raw `<a>` tags with absolute paths. The `Link` component reads `import.meta.env.BASE_URL` and prefixes paths automatically. The rehype plugin and Astro both read from the same `base` variable in `astro.config.mjs`. To deploy at a subpath, two changes are required:

1. Set `base` in `astro.config.mjs` (single variable shared by Astro and the rehype plugin)
2. Update `public_folder` in `public/admin/config.yml` to include the base path
