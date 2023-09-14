<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\\/]+/g, '-')
}
</script>
<template>
  <div v-for="project in Object.keys(projects)" :key="project">
    <h4 :id="slug(project)" class="my-2 font-bold">{{ project }}</h4>
    <div class="row row-cols-1 row-cols-md-2 g-3">
      <div class="col mb-3" v-for="(item, idx) in projects[project]" :key="idx">
        <div class="card">
          <div class="row g-0">

            <div class="col-md-4">
              <img :src="item.image" class="img-fluid rounded-start" :alt="item.name" v-if="item.image" />
              <img src="https://placehold.co/300" class="img-fluid rounded-start" :alt="item.name" v-else />
            </div>

            <div class="col-md-8 d-flex flex-column align-content-stretch ">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">{{ item.desc }}</p>
              </div>

              <div class="card-footer text-body-secondary">
                <a :href="item.link" target="_blank" class="stretched-link">Link</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
