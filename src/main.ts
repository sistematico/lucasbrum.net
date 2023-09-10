import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '~/assets/styles/main.scss'
import 'bootstrap'
import app from '~/app.vue'
import routes from '~pages'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(far, fas, fab)

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(app)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
