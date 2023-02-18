<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import router from '@/router'
import { GStore } from '../../main'

const props = defineProps({
    event: {},
})

function register() {
    GStore.flashMessage =
        'You are successfully registered for  ' + props.event.title
    setTimeout(() => {
        GStore.flashMessage = ''
    }, 3000)
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
