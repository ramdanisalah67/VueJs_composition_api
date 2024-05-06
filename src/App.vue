<template>
  <div>
    <myComponent @handleClick="logs" />
    <router-view />
    <hr>
    <mittComponent />
  </div>
</template>

<script setup>
import myComponent from '@/components/emitTest.vue'
import mittComponent from '@/components/mittComponent.vue'
import { inject, onMounted } from 'vue';
const logs = ()=>{
  console.log("someone  loggedIn into app !!")
}

const emitter = inject("emitter")

onMounted(()=> {
  console.log("gagag")
  emitter.on("state",()=>{
    console.log("user is online now !!")
  })
})
</script>

<style>



</style>
