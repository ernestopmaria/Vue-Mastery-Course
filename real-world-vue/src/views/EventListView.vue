<script setup>
import { computed } from 'vue'
import nProgress from 'nprogress'
import { events, totalEvents } from '../router/index'
import { onBeforeRouteUpdate } from 'vue-router'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

const props = defineProps({
  page: {
    type: Number,
  },
})
onBeforeRouteUpdate(async (routeTo) => {
  nProgress.start()
  EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
    .then((response) => {
      events.value = response.data
      this.console.log(events.value)
      totalEvents.value = response.headers['x-total-count']
    })
    .catch((error) => {
      console.log(error)
      return { name: 'network-error' }
    })
    .finally(() => {
      nProgress.done()
    })
})

const hasNextPage = computed(() => {
  var totalPages = Math.ceil(totalEvents.value / 2)
  return props.page < totalPages
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev" v-if="page !== 1" id="page-prev">
        &#60; Prev
      </RouterLink>

      <RouterLink :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next" v-if="hasNextPage" id="page-next">
        Next &#62;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
