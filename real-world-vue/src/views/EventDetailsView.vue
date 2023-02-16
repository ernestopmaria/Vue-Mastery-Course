<script setup>
import { ref, onMounted } from 'vue'

import EventService from '@/services/EventService'

const event = ref(null)
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
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>
