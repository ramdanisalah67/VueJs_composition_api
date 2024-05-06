<template>
    <div>
        <p>weclome to child props the valus is {{ props.myName }}</p>
    </div>
</template>
<script setup>
import {defineProps} from 'vue'
import { useRoute, useRouter } from 'vue-router';
const props = defineProps({
    myName: {
        type: String,
        required: true
    }
})

const router = useRouter();
console.log("Router from view => ",router)

const route = useRoute();
console.log("Route from view => ",route)
</script>