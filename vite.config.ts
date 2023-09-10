// import path from 'node:path'
import fs from 'fs-extra'
import { basename, dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import markdown from 'unplugin-vue-markdown/vite'
import components from 'unplugin-vue-components/vite'
import matter from 'gray-matter'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    pages({
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))

        if (!path.includes('projects.md') && path.endsWith('.md')) {
          const md = fs.readFileSync(path, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        return route
      },
    }),
    markdown({}),
    components({
      dirs: [
        'src/components',
        'src/layouts'
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    })
  ],

  build: {
    rollupOptions: {
      external: (id) => id.includes('_posts')
    }
  }
})