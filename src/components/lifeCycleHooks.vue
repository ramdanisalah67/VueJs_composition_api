<template>
  <div class="body">
    <div>lideCycle Hooks !!</div>
  </div>
</template>
<script setup>
import { onMounted,onBeforeMount } from "vue";


onMounted(()=>{
    console.log("mounted !!!")
})

onBeforeMount(()=>{
    console.log("before mount !!!")
})
</script>