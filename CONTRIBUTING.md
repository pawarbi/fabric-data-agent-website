# Contributing to Fabric Data Agent

Thank you for helping grow the Fabric Data Agent community. This guide explains how to submit content to the website.

## Quick Start: Submit via GitHub Issue

The easiest way to contribute is through our **submission forms** — no Git or coding knowledge required.

1. Go to [New Issue](https://github.com/pawarbi/fabric-data-agent-website/issues/new/choose)
2. Choose the type of content you want to submit (Article, Video, Resource, Event, Tool, or LinkedIn Post)
3. Fill out the form and submit

A maintainer will review your submission and add it to the site.

## For Developers: Submit via Pull Request

If you're comfortable with Git, you can submit content directly as a Pull Request.

### Setup

```bash
git clone https://github.com/pawarbi/fabric-data-agent-website.git
cd fabric-data-agent-website
npm install
npm run dev
```

### Add Content

Create a new Markdown file in the appropriate directory under `src/content/`:

| Content Type | Directory |
|---|---|
| Article | `src/content/articles/` |
| Video | `src/content/videos/` |
| Resource | `src/content/resources/` |
| Event | `src/content/events/` |
| Tool | `src/content/tools/` |
| LinkedIn Post | `src/content/linkedin/` |
| Learning Path | `src/content/learn/` |

Use **kebab-case** for filenames (e.g., `my-article-title.md`).

Each file needs YAML frontmatter matching the schema for that content type. See the [Contribute page](https://pawarbi.github.io/fabric-data-agent-website/contribute/) on the website for detailed templates.

### Preview

```bash
npm run dev
```

Open `http://localhost:4321` to verify your content renders correctly.

### Submit

1. Fork the repository
2. Create a branch: `git checkout -b add/my-content-title`
3. Add your file, commit, and push
4. Open a Pull Request against `main`

## Content Guidelines

- Content must be relevant to **Microsoft Fabric Data Agents**
- Links must be accurate and functional
- Descriptions should be clear and informative (2-3 sentences minimum)
- Use relevant tags for discoverability
- Be respectful and inclusive

## Questions?

Open an [issue](https://github.com/pawarbi/fabric-data-agent-website/issues) and we'll help you out.

## Branch Protection

All changes to `main` must go through a Pull Request:

1. **CI must pass** — The CI workflow runs type checking and a full build. PRs with failures cannot be merged.
2. **Review required** — A maintainer must approve the PR before merging.
3. **No direct pushes** — Direct pushes to `main` are restricted.

> **Note for admin:** Branch protection rules must be configured in GitHub repo **Settings → Branches → Add rule** for `main`. Enable "Require a pull request before merging", "Require status checks to pass", and select the `check` CI job.

See [CONVENTIONS.md](./CONVENTIONS.md) for the full development workflow and coding standards.
