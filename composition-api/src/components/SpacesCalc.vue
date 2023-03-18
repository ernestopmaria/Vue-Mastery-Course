<script setup>
import { eventSpace } from './event-space';

const {attending, capacity,dincreaseCapacity,increaseCapacity,spacesLeft} =eventSpace()

</script>

<template>
    <div>
        <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
        <h2>Attending</h2>
        <ul>
            <li v-for="(name, index) in attending" :key="index" @click="attending.splice(index, 1)">
                {{ name }}
            </li>
        </ul>
       
        <button @click="increaseCapacity">Aumentar</button> ||
        <button @click="dincreaseCapacity">Diminuir</button>

    </div>
</template>
<style>
ul {
    display: flex;
    justify-content: space-between;
    align-items: left;
}

li {
    list-style-type: none;
    background-color: black;
    padding: 5px 18px;
    border-radius: 10%;
    cursor: pointer;


}
</style>



