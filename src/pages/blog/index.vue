<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
// import { englishOnly, formatDate } from '~/logics'
// import type { Post } from '~/types'

interface Post {
  path: string
  title: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
  radio?: boolean
  video?: boolean
  inperson?: boolean
}

const props = defineProps<{
  type?: string
  posts?: Post[]
  extra?: Post[]
}>()

const router = useRouter()
const routes: Post[] = router
  .getRoutes()
  .filter(i => i.path.startsWith('/blog') && i.meta.frontmatter.date)
  .filter(i => !i.path.endsWith('.html') && i.meta.frontmatter.type === props.type)
  .map(i => ({
    path: i.path,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    lang: i.meta.frontmatter.lang,
    duration: i.meta.frontmatter.duration,
    recording: i.meta.frontmatter.recording,
    upcoming: i.meta.frontmatter.upcoming
  }))

const posts = computed(() => [...(props.posts || routes), ...(props.extra || [])].sort((a, b) => +new Date(b.date) - +new Date(a.date)))

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)

function isSameGroup(a: Post, b?: Post) {
  return isFuture(a.date) === isFuture(b?.date) && isSameYear(a.date, b?.date)
}

function getGroupName(p: Post) {
  if (isFuture(p.date)) return 'Upcoming'
  return getYear(p.date)
}
</script>

<template>
  <h1 class="mt-3">Blog</h1>
  <ul>
    <template v-if="!posts.length">
      <div py2 op50>{ nothing here yet }</div>
    </template>

    <template v-for="(route, idx) in posts" :key="route.path">
      <div
        v-if="!isSameGroup(route, posts[idx - 1])"
        select-none
        relative
        h20
        pointer-events-none
        slide-enter
        :style="{
          '--enter-stage': idx - 2,
          '--enter-step': '60ms'
        }"
      >
        <span class="h2">{{ getGroupName(route) }}</span>
      </div>
      <div
        class="slide-enter"
        :style="{
          '--enter-stage': idx,
          '--enter-step': '60ms'
        }"
      >
        <component
          :is="route.path.includes('://') ? 'a' : 'RouterLink'"
          v-bind="
            route.path.includes('://')
              ? {
                  href: route.path,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                }
              : {
                  to: route.path
                }
          "
          class="item block font-normal mb-6 mt-2 no-underline"
        >
          <li class="list-unstyled text-decoration-none">
            <figure class="text-end">
              <blockquote class="blockquote">
                <p>{{ route.title }}</p>
              </blockquote>
              <figcaption class="blockquote-footer">{{ route.duration }} · <cite :title="route.date">{{ route.date }}</cite></figcaption>
            </figure>
          </li>
        </component>
      </div>
    </template>
  </ul>
</template>
