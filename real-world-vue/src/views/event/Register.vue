<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '@/router'
/* const props = defineProps({
    event: {},
}) */

function register() {
    router.push({
        name: 'event-details',
    })
}
</script>

<template>
    <div>
        <p>Regstration form here</p>
        <button @click="register">Register Me</button>
    </div>
</template>
