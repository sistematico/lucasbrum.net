<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\\/]+/g, '-')
}
</script>
<template>
  <template v-for="project in Object.keys(projects)" :key="project">
    <h4 :id="slug(project)" class="my-2 font-bold">{{ project }}</h4>
    <!-- <div class="row row-cols-1 row-cols-md-2 g-5"> -->
      <!-- <div class="col"> -->
      <div class="card-group">
      <!-- <div class="col" v-for="(item, idx) in projects[project]" :key="idx"> -->
        

        <div class="card" v-for="(item, idx) in projects[project]" :key="idx">
          <div class="row g-0">
            <div class="col-md-4" v-if="item.image">
              <img src="item.image" class="img-fluid rounded-start" alt="item.name" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text" v-if="item.desc">{{ item.desc }}</p>
                <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
                <a :href="item.link" target="_blank" class="card-link stretched-link">Link</a>
              </div>
            </div>
          </div>
        </div>


        <!-- </div> -->

      <!-- </div> -->
    </div>
  </template>
</template>
