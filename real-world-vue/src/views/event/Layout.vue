<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue'

import EventService from '@/services/EventService'

const event = ref([])
const props = defineProps({
  id: {
    required: true,
  },
})
onMounted(async () => {
  await EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <span v-if="!event">Carregando...</span>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'event-details' }">Details</RouterLink>|
      <RouterLink :to="{ name: 'event-register' }">Register</RouterLink>|
      <RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
    </div>
    <RouterView :event="event" />
  </div>
</template>
