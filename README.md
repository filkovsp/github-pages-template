# GitHub Pages with VitePress

A Markdown-first template, built with VitePress and deployed to GitHub Pages through GitHub Actions.

## 1. Configure GitHub repository values

Edit `.vitepress/config.ts` and replace:

- `USERNAME` with your GitHub username.
- `REPOSITORY` with your repository name.

For a project site such as `https://USERNAME.github.io/REPOSITORY/`, keep `repository` set to the repository name. For a user/organization site named `USERNAME.github.io`, set `repository = 'USERNAME.github.io'`; the config will use `/` as the base path.

The config also builds links to homework files in the repository.

## 2. Run locally

Install Node.js (an active LTS version; Node 20+ recommended), then from the repository root:

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (normally `http://localhost:5173/`). VitePress hot-reloads when Markdown or config files change.

To build and check the production site:

```bash
npm run build
npm run preview
```

## 3. Deploy to GitHub Pages

1. Push the repository and the `.github/workflows/deploy.yml` file to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The workflow deploys automatically when you push to `main`, or you can run it manually from **Actions**.
5. Wait for the workflow to complete. GitHub will show the published URL in **Settings → Pages**.

## 4. Add a classwork page

Add a Markdown file under `Lesson-N/classwork/`, e.g. `03-functions.md`, and include front matter:

```yaml
---
title: Functions
description: A short page description
---
```

Write the page using Markdown. Add the new page to the sidebar in `.vitepress/config.ts` so it appears in navigation.

## 5. Add another lesson

Create a new `Lesson-2/classwork/` directory with an `index.md` and topic files. Add its navigation links to `.vitepress/config.ts`.

Homework is intentionally kept in the repository, but linked to directly on GitHub instead of being published as part of the course website.

## Notes

- VitePress renders Markdown files into static HTML.
- `.vitepress/config.ts` is the site configuration.
- `.vitepress/theme/custom.css` customizes the default theme.
- The workflow builds the site and deploys `.vitepress/dist` to GitHub Pages.
- The root `README.md` remains the repository README; `index.md` is the website home page.
