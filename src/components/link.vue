<script setup lang="ts">
defineProps<{ href: string, class?: string }>()
</script>
<template>
  <component 
    :is="href.includes('://') 
    ? 'a' 
    : 'RouterLink'" 
    v-bind="href.includes('://') 
    ? { href: href, target: '_blank', rel: 'noopener noreferrer' } 
    : { to: href }" 
    :class="class"
  >
    <slot />
  </component>
</template>
