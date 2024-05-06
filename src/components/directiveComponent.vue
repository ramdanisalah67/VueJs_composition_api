<template>
  <div class="body">
    <div v-bg="'black'">Welcome,salah-eddine to directive</div>
  </div>
</template>






<script setup>
import { useRoute, useRouter } from "vue-router"

//custom directive 

const vBg = {
    mounted : (el,data) => {
        console.log("element => ",el)
        console.log("data => ",data)
        el.style.background = data.value
        el.style.color = "white"
        el.style.padding = "10px"
        el.style.textAlign = "center"
        el.style.borderRadius = "10px"
        el.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.5)"
    }
}


const router = useRouter()
console.log("Router from view => ", router)

const route = useRoute()
console.log("Route from view => ", route)
</script>