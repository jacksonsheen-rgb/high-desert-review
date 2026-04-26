# blog

a brutalist, static blog built with [astro](https://astro.build). edited via [sveltia cms](https://github.com/sveltia/sveltia-cms). deployed to github pages.

## setup

```sh
npm install
npm run dev      # dev server
npm run build    # production build
npm run check    # typecheck + lint + format check
npm run format   # auto-format
```

## cms

the cms lives at `/admin`. sign in with a github personal access token.

posts are markdown files in `src/content/posts/`. images go in `public/images/`.

## deploy

pushes to `main` trigger a github actions workflow that builds and deploys to github pages.

## config

- `astro.config.mjs` — site config, `base` path
- `public/admin/config.yml` — cms fields and backend
- `eslint.config.js` / `.prettierrc` — linting and formatting