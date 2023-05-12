import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import autoRoutes from '~pages'
import 'bootstrap'
import '@/assets/scss/main.scss'
import App from './App.vue'
// import Home from '@/views/home.vue'
// import NotFound from '@/views/notfound.vue'

// const routes = [
//   { path: '/', name: 'Home', component: Home },
//   { path: '/sobre', name: 'About', component: () => import('@/views/about.vue') },
//   { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
// ]

const routes = autoRoutes.map(i => {
  return {
    ...i,
    alias: i.path.endsWith('/') ? `${i.path}index.html` : `${i.path}.html`
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
