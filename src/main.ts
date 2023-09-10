import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '~/assets/styles/main.scss'
import 'bootstrap'
import app from '~/app.vue'
import routes from '~pages'
import NProgress from 'nprogress'
import '~/assets/styles/nprogress.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Vue3Lottie from 'vue3-lottie'


library.add(far, fas, fab)

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

router.beforeResolve((to, _from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

createApp(app)
  .use(router)
  .use(Vue3Lottie)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
