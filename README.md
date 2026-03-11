# Fabric Data Agent

A documentation and community website for the Fabric Data Agent project. The site provides information about the agent's capabilities, architecture, use cases, and how to get involved.

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`.

## 🏗️ Building for Production

```bash
npm run build
```

The production-ready output is generated in the `./dist/` directory. You can preview the build locally with:

```bash
npm run preview
```

## 🤝 Contributing

We welcome contributions! Visit the [Contribute](/contribute) page on the site for details on how to get involved, report issues, or submit improvements.

## 🛠️ Tech Stack

- [Astro](https://astro.build) — Static site framework
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS
- [Pagefind](https://pagefind.app) — Static search
- [GitHub Pages](https://pages.github.com) — Hosting & deployment
- [Umami](https://umami.is) — Privacy-friendly analytics

## 📊 Analytics

This site uses [Umami Cloud](https://cloud.umami.is) for privacy-friendly, cookie-free analytics. To enable:

1. Sign up at https://cloud.umami.is (free tier: 10K events/month)
2. Add your website and copy the **Website ID**
3. Create a `.env` file (see `.env.example`):
   ```
   PUBLIC_UMAMI_WEBSITE_ID=your-website-id-here
   ```
4. Rebuild and deploy — analytics will start collecting automatically

Tracked events: page views, flyout opens, search queries, tag filters, bookmarks, knowledge graph clicks, and external link clicks.
