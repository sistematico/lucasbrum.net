import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '~/assets/styles/main.scss'
import 'bootstrap'
import app from '~/app.vue'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(app)
  .use(router)
  .mount('#app')
