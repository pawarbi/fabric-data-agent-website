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
