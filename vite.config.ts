import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import markdown from 'vite-plugin-md'
// import shiki from 'markdown-it-shiki'
import matter from 'gray-matter'
import fs from 'fs-extra'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~/': resolve(__dirname, './node_modules/')
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    pages({
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const npath = resolve(__dirname, route.component.slice(1))

        // if (!path.includes('blog') && path.endsWith('.md')) {
        if (npath.includes('blog')) {
          const md = fs.readFileSync(npath, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        return route
      }
    }),

    markdown()
  ]
})
