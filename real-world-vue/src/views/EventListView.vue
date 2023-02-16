<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'
import EventCard from '@/components/EventCard.vue'

const events = ref(null)

onMounted(async () => {
  await EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>

<template>
  <span v-if="!events">Carregando...</span>
  <h1 v-if="events">Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
