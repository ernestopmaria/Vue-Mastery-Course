<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import GStore from '@/store'

const event = GStore.event

/* onMounted(async () => {
  console.log(GStore.event)
}) */
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-details' }">Details</RouterLink>|
      <RouterLink :to="{ name: 'event-register' }">Register</RouterLink>|
      <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
</template>
