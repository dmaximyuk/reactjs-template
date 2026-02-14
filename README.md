# React.js Template

Starter template for React apps: FSD, TypeScript, Vite. Minimal dependencies, production-ready build and Docker deploy.

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 7** + **SWC** — build and transpilation
- **TanStack Router** — routing
- **TanStack Query** — requests and cache
- **Zustand** — state
- **i18next** — i18n
- **Valibot** — validation
- **Ky** — HTTP client
- **SASS/SCSS** + **LightningCSS** — styles
- **Jest** + **Testing Library** — tests
- **ESLint** + **Prettier** + **Commitlint** + **Husky** — lint and commits
- **Docker** + **NGINX** — deploy

## Structure (FSD)

```
src/
├── app/          # init, providers, router, global styles
├── pages/        # pages
├── widgets/      # widgets (composition of features and blocks)
├── features/     # features
├── entities/     # entities
└── shared/       # UI, API, config, utils, styles
```

Imports only “down”: app → pages/widgets/features → entities → shared.

### Where to put code: layer questions

Before adding code, ask yourself in order:

1. **App** — is this app init, routing, providers, global styles, or app-wide config?
2. **Pages** — is this a full page (screen) for one route/URL?
3. **Widgets** — is this a large self-contained UI block used on multiple pages or one of several such blocks on one page?
4. **Features** — is this a user action with business value, reused in different places (form, action button, flow)?
5. **Entities** — is this a business entity from the domain (model, entity representation without binding to one action)?
6. **Shared** — is the code not business-bound: utils, UI kit, API client, config, i18n?

The first match defines the layer. If none fit — clarify boundaries (don’t bloat entities; non-reused code can stay on the page).

## Requirements

- **Node.js** ≥ 24.12
- **pnpm** (recommended)

## Install and run

```bash
git clone <repo-url>
cd reactjs-template
pnpm install
pnpm run dev
```

The app will open at the URL from the output.

## Scripts

| Command | Description |
|--------|-------------|
| `pnpm run dev` | Dev server with HMR |
| `pnpm run build` | Production build (runs check before) |
| `pnpm run build:compress` | Build + gzip/brotli for static assets |
| `pnpm run build:analyze` | Build + bundle size report |
| `pnpm run serve` | Serve production build locally |
| `pnpm run check` | Type check + lint + tests |
| `pnpm run test` | Run tests |
| `pnpm run lint` | ESLint (with autofix) |
| `pnpm run format` | Prettier for code and styles |
| `pnpm run deploy` | Deploy `dist` to GitHub Pages |

## Environment variables

Copy `.env.example` to `.env` and adjust if needed:

- `VITE_API_URL` — base API URL
- `VITE_I18N_*` — i18n settings (default language, storage key, debug)

## Docker

```bash
docker build -t reactjs-template .
docker run -p 80:80 reactjs-template
```

Build uses `build:compress`; static assets are served via NGINX (config in `nginx.conf`).

## Code standards

- Strict typing, no `any`
- FSD: layer boundaries and import direction
- ESLint + Steiger (FSD) in CI/local
- Prefer arrow functions, SOLID and KISS
- No comments or dead code in prod

Detailed rules in `.cursor/rules/` and `AGENTS.md`.

## Commitlint

Commits are checked with **Conventional Commits** (Husky + commitlint). Format:

```
<type>(<scope>): <subject>
```

- **type**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`.
- **scope** (optional): area of change, e.g. `auth`, `header`, `deps`.
- **subject**: short description in imperative mood, no period at end; up to 72 chars.

Examples: `feat(auth): add login form`, `fix(api): handle 404`, `chore(deps): update vite`.

## Contacts

- **Email**: d_maksimyk@vk.com
- **Telegram**: [t.me/d_maximyuk](https://t.me/d_maximyuk)
- **GitHub**: [github.com/dmaximyuk](https://github.com/dmaximyuk)

## License

Template is free to use, modify and distribute.
