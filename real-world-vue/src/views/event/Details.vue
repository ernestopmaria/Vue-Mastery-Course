<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
defineProps({
  event: {
    required: true,
  },
})
</script>

<template>
  <div>
    <p>
      {{ event.time }} on {{ event.date }} @
      {{ event.location }}
    </p>
    <p>{{ event.description }}</p>
  </div>
</template>
