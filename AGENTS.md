# Instructions for AI (Cursor / agents)

Project: React + TypeScript, FSD, Vite. Goal: clean, simple, maintainable code.

## Summary

- **Code**: clean, no unnecessary complexity, no comments, no dead code. SOLID, KISS, clean architecture (FSD).
- **English only in the project**: README, docs, rules, commit messages, code — everything you write in the project must be in English. No Russian or other languages in repo content. User-facing app text goes through i18n.
- **Dependencies**: minimal set of libraries; add new ones only when necessary. Versions: up-to-date and compatible.
- **Complexity**: consider Big-O and optimize bottlenecks; do not over-engineer for theoretical optimality.
- **Frontend**: FSD (see layer placement questions below), valibot for validation, explicit error handling (try/catch), sensible optimization (memoization when needed).
- **Translations**: use the shared **i18n** instance from `@/shared/lib` — in components: `import { i18n } from "@/shared/lib"`, then `const { t } = i18n`. Do not use `useTranslation` or any i18n hooks.
- **Size**: minimal project size — bundle, dependency count, code and asset volume.
- **Design**: think through solutions so they are maintainable by the team and do not cause integration issues later.
- **Style**: human-style code — as a developer on the team would write it, not template “AI-style”.
- **Workflow**: at the end of tasks that change code, always run `pnpm run format` yourself.

## Project rules

Detailed rules live in **`.cursor/rules/`** (`.mdc` files):

- `core-standards.mdc` — clean code, architecture, SOLID, KISS
- `dependencies.mdc` — dependencies and versions
- `complexity.mdc` — algorithm complexity and optimality
- `minimal-size.mdc` — minimal project size (bundle, dependencies, code)
- `design-maintainability.mdc` — designing solutions, maintainability, feature integration
- `human-code.mdc` — human-style code, not AI-generated
- `workflow.mdc` — always run `pnpm run format` at the end
- `frontend.mdc` — FSD, valibot, errors, optimization (for `src/**/*.{ts,tsx}`)
- `fsd.mdc` — FSD layer placement: list of questions (app → pages → widgets → features → entities → shared)

### FSD: where to put code (questions in order)

1. App? — app init, routing, providers, global styles, app-wide config.
2. Pages? — full page/screen for one route.
3. Widgets? — large self-contained UI block used on multiple pages or one of several such blocks on a page.
4. Features? — user action with business value, reused (form, action button, flow).
5. Entities? — business entity (model, entity representation).
6. Shared? — not business-bound: utils, UI kit, API client, config, i18n.

First “yes” → that layer. Imports only downward along the hierarchy.

Follow these rules when changing code or proposing dependencies.
