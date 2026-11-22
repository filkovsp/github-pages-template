import { defineConfig } from 'vitepress'
import { createBuildTimeDiagramsPlugin } from 'vitepress-plugin-diagrams'

const username = 'filkovsp'
const repository = 'github-pages-template'
const github = `https://github.com/${username}/${repository}`

const { configureMarkdown, vitePlugin } = createBuildTimeDiagramsPlugin({
  diagramsDir: 'public/diagrams',
  publicPath: `/${repository}/diagrams`,
  diagramsDistDir: 'diagrams',
})

export default defineConfig({
  title: 'GitHub Page powered by VitePress',
  description: 'Just playing around.',
  lang: 'en-GB',
  srcExclude: ['**/README.md'],
  base: `/${repository}`,
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: github },
    ],
  },
  markdown: {
    config: (md) => configureMarkdown(md),
  },
  vite: {
    plugins: [vitePlugin()],
  },
})
