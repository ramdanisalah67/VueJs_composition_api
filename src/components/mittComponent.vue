<template>
  <div class="body">
    <div>Welcome,</div>
    <button @click="stateLogs()">state</button>
  </div>
</template>
<script setup>
import { inject } from 'vue';


const emitter = inject("emitter");
console.log(emitter)


const stateLogs = () => {
  emitter.emit("state")
}
</script>