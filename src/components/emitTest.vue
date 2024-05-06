<template>
    <div>
        <p>this is emit event test</p>
        <button @click="emits('handleClick')">login</button>
    </div>
</template>
<script setup>
import {defineEmits} from 'vue'
const emits = defineEmits(['handleClick'])
</script>