<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const routeName = route.name?.toString() ?? 'Post'
</script>
<template>
  <div id="wrapper">
    <Header />
    <main class="flex-shrink-0">
      <div class="container">
        <Section>
          <Breadcrumb 
            :items="[
              { name: 'Início', link: '/' }, 
              { name: 'Blog', link: '/posts' }, 
              { name: routeName }, 
            ]" 
          />
          <div class="row">
            <div class="col-12">
              <router-view />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <a href="#" @click.prevent="$router.back()">Voltar</a>
            </div>
          </div>
        </Section>
      </div>
    </main>
    <Footer />
  </div>
</template>
