# [GitHub Pages](https://docs.github.com/en/pages) template (starter kit)

A minimal Jekyll site for publishing Markdown classwork as presentation-style pages,
while keeping homework instructions and JavaScript task files in the GitHub repository.

## Repository structure

```text
repo-root/
├── README.md
├── _config.yml
├── index.md
├── _layouts/
│   ├── default.html
│   ├── home.html
│   └── slide.html
├── assets/css/site.css
└── Lesson-1/
    ├── classwork/
    │   ├── index.md
    │   ├── 01-introduction.md
    │   └── 02-variables.md
    └── homework/
        ├── README.md
        ├── task-1.js
        └── task-2.js
```

## 1. Configure the repository details

Edit `_config.yml` and replace:

- `USERNAME` with your GitHub username.
- `REPOSITORY` with the repository name.

For example, if the repository is `https://github.com/alex/js-course`, use:

```yaml
url: "https://alex.github.io"
baseurl: "/js-course"
repository_url: "https://github.com/alex/js-course"
```

Keep `baseurl: ""` only if you are publishing a user/organization site from
`USERNAME.github.io` rather than a project site.

The `repository_url` and `default_branch` values are used to build homework links.

## 2. Enable GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`.
5. Save and wait for the Pages deployment to finish.

The site should appear at `https://USERNAME.github.io/REPOSITORY/`.

## 3. Add a lesson page

Create a Markdown file under a lesson's `classwork/` directory. Start it with
front matter:

```yaml
---
layout: slide
title: Your topic
subtitle: A short explanation
lesson_label: LESSON 2 · TOPIC
lesson_url: /Lesson-2/classwork/
homework_path: Lesson-2/homework/README.md
---
```

Then write the content in Markdown. Use `---` on a line by itself to separate
sections visually. Each section remains part of the same scrollable page; this
starter does not implement keyboard-controlled, one-screen-per-slide navigation.

The `homework_path` property adds a callout linking directly to the homework
README in the GitHub repository. The link is generated using `repository_url`
and `default_branch` from `_config.yml`.

## 4. Add another lesson

Copy the `Lesson-1` directory structure and update:

- The lesson's classwork index page.
- The links on the root `index.md`.
- The `exclude` list in `_config.yml` to include the new homework directory.
- The `lesson_label`, `lesson_url`, and `homework_path` front matter on each page.

For example, add `- Lesson-2/homework/` under `exclude`.

## 5. What `exclude` does

Jekyll's `exclude` setting prevents the listed paths from being copied into the
generated `_site` website. It does **not** delete or hide them from GitHub.
Learners can still open homework files using the links on the published pages.

This starter explicitly excludes each homework directory. Add a matching entry
for every new lesson's homework directory.

## Notes

- GitHub Pages supports Jekyll builds from the repository root.
- This starter uses built-in Jekyll functionality and does not require custom plugins.
- The root `README.md` remains the normal GitHub repository README.
- `index.md` is the website homepage.
- The slide layout is responsive and uses Markdown for lesson content.
- The pages are presentation-inspired, not a full slide deck. For true slide-by-slide
  keyboard navigation, consider a presentation framework such as Reveal.js.
