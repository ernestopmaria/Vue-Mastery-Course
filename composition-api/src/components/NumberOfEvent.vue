<script setup>
import { computed, ref, watchEffect } from 'vue';


const searchInput = ref("")
const results = computed(() => {
    return eventList.value.length
})
const eventList = ref([])
const addEvent = (value) => {
    eventList.value.push(value)
    searchInput.value=""
}
watchEffect(() => {
    results.value=eventA
})
</script>


<template>
    <div>
        Search for <input v-model="searchInput"/>
        <div>
            <p>Number of events:{{results}} </p> 
            <button @click="addEvent(searchInput)">Add Event </button>

            <p>Events List</p>
            <ul>
                <li v-for="(name , index) in eventList">{{name}}</li>
            </ul>
        </div>
    </div>
</template>