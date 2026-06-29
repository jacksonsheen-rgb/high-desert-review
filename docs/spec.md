# blog spec

## intent

the system is a modular foundation for a personal blog. its sole purpose is to publish writing. all other concerns are subordinate to that.

design is decoupled from structure. the current site applies a brutalist aesthetic, but the foundation carries no visual assumptions. a fork requires only a new stylesheet.

the architecture optimizes for stability. the system is built once. breakage traces to an obvious cause. any change is small and local.

## priorities

- simplicity
- minimalism
- speed

## stack

- astro
- sveltia cms
- github pages
- github actions

## content

- markdown in `src/content/posts/`
- frontmatter: `title`, `date`, `tags` (string array, optional), `draft` (boolean), `category` (string, optional)
- drafts hidden in production, visible in dev

## pages

- `/` — paginated post list, newest first
- `/posts/[slug]` — single post
- `/tags` — all tags with counts
- `/tags/[tag]` — paginated posts for a tag
- `/about` — static page
- prev/next links.

## deliberate omissions

- no analytics
- no comments
- no rss
- no search
- no sidebar
- no javascript
- no user-facing configuration

## owner experience

the publishing workflow is: author a markdown file or use the cms, then push to main. the site is live on deploy. there is no staging environment, no preview step, and no approval flow.

the cms provides a graphical editing interface. it is optional. the site functions identically without it.
