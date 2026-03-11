# Development Conventions

This file defines the development workflow, coding standards, and quality gates for this project. It is intended as a reference for both human contributors and AI-assisted coding agents.

## Development Workflow

Every change — no matter how small — follows this process:

1. **Branch** — Create a feature branch from `main` (`add/feature-name` or `fix/bug-name`)
2. **Implement** — Make changes incrementally, one logical change at a time
3. **Verify** — Run `npm run build` locally before committing. Build must pass with zero errors.
4. **Commit** — Use conventional commit messages (see below). One concern per commit.
5. **Push & PR** — Open a Pull Request against `main`. CI workflow runs automatically.
6. **Review** — CI must pass. Maintainer reviews before merge.
7. **Deploy** — Merging to `main` triggers automatic deployment to GitHub Pages.

## Pre-Change Checklist

Before starting any change, verify:

- [ ] You understand what the change does and why
- [ ] You've checked if the change affects other pages or components
- [ ] You're working on a feature branch (not directly on `main`)

## Post-Change Checklist

After every change, verify:

- [ ] `npm run build` passes with zero errors
- [ ] No new warnings introduced
- [ ] No hardcoded secrets, API keys, or credentials in code
- [ ] Environment variables used for any sensitive config (prefixed `PUBLIC_` only if safe to expose)
- [ ] Changes are documented if they affect setup or usage
- [ ] Commit message follows the conventional format

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new content collection for podcasts
fix: correct sidebar link to resources page
docs: update README with analytics setup
chore: update dependencies
```

Always include the co-author trailer for AI-assisted changes:
```
Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
```

## Security Rules

**MUST follow:**
- Never commit `.env` files — they are gitignored
- Never hardcode passwords, API keys, tokens, or secrets
- Use `PUBLIC_` prefixed env vars only for values safe to expose in client-side code
- External scripts must be loaded from trusted sources only
- Content Security Policy (CSP) is configured — update it if adding new external script sources
- Report vulnerabilities privately via GitHub Security Advisories (see SECURITY.md)

## File Organization

```
src/
  components/    → Reusable Astro components
  content/       → Markdown content collections (articles, videos, resources, etc.)
  layouts/       → Page layouts (BaseLayout.astro is the primary layout)
  pages/         → Route pages (file-based routing)
  styles/        → Global CSS
public/          → Static assets (favicon, robots.txt, llms.txt)
.github/
  workflows/     → CI/CD workflows
  ISSUE_TEMPLATE/ → GitHub Issue forms for content submission
```

## Content Collections

Each collection has a Zod schema defined in `src/content.config.ts`. New content files must match the schema exactly. Filenames use **kebab-case** (e.g., `my-article-title.md`).

## Code Style

- **Indentation:** 2 spaces (enforced by `.editorconfig`)
- **TypeScript:** Strict mode enabled (`tsconfig.json` extends `astro/tsconfigs/strict`)
- **CSS:** Tailwind utility classes preferred; custom CSS only when Tailwind cannot achieve the desired result
- **Scripts:** Use `is:inline` for scripts that need to run before hydration (e.g., theme toggle). Use standard `<script>` for everything else.
- **Comments:** Only add comments that explain *why*, not *what*. Code should be self-explanatory.

## Adding External Dependencies

Before adding a new npm package:
1. Check if the functionality can be achieved with existing tools
2. Prefer zero-dependency or small packages
3. Ensure the package is actively maintained
4. Run `npm audit` after installation to check for vulnerabilities

## Testing

- The CI workflow runs `astro check` (TypeScript type checking) and `npm run build` on every PR
- Locally, always run `npm run build` before pushing
- For content changes, use `npm run dev` to preview at `http://localhost:4321`

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `PUBLIC_UMAMI_WEBSITE_ID` | Umami analytics website ID | No (analytics disabled if empty) |
| `PUBLIC_UMAMI_SCRIPT_URL` | Umami script URL | No (defaults to cloud.umami.is) |

Add new env vars to `.env.example` with documentation.
