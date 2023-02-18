<script setup>
const props = defineProps({
  resource: {
    type: String,
    require: true,
    default: 'page',
  },
})
</script>

<template>
  <h1>Oops!</h1>
  <h3>The {{ props.resource }} you're looking for is not here.</h3>
  <router-link :to="{ name: 'event-list' }">Back to the home page</router-link>
</template>
