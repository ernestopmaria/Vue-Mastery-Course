
import { ref, computed } from 'vue';

export const eventSpace = () => {


const capacity = ref(4)
const attending = ref(['Tim', "Bob", "Joel"])
const spacesLeft = computed(() => {
    return capacity.value - attending.value.length
})

const increaseCapacity = () => {
    capacity.value++
}
const dincreaseCapacity = () => {
    if (spacesLeft.value == 0) {
        return 0
    } else {
        capacity.value--
    }

}
    return {
        capacity,
        attending,
        spacesLeft,
        increaseCapacity,
       dincreaseCapacity
    }

}


