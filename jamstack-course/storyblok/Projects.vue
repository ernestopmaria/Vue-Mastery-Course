<script setup>
defineProps({
    blok:Object
})
</script>
<template>
    <div class="container project-page">
        <div class="project-title">
            <h1>{{blok.name || "New Project"}}</h1>
            <NuxtLink :to="{name: 'index'}">Go Back</NuxtLink>

        </div>
        <div class="project-description">
            <img :src="blok.image?.filename || 'image not foun'" :alt="blok.image?.alt || 'Nothing to show'"/>
            <p>{{blok.desc }}</p>
        </div>

    </div>
</template>