<template>
  <div class="body container">
    <div>value is {{ a }} </div>
    <div>Array Content is {{ numbers }} </div>

    <div>
        
        <button class="btn btn-secondary m-4" @click="increment">increment</button>
        <button class="btn btn-dark mx-4" @click="decrement">decrement</button>
        <button class="btn btn-primary mx-4" @click="numbers.push(a)">push</button>
    </div>

  </div>
</template>
<script setup>
import counter from '@/Mixins/counter'
import { ref, watch } from 'vue'

const {a,increment,decrement} = counter()
const numbers = ref([])

watch(()=>a.value,( newVal, oldVal) => {
    
    console.log("old val =>",oldVal)
    console.log("new val =>",newVal)

})
watch(()=>numbers.value,( newVal, oldVal) => {
    
    console.log("Array old val =>",oldVal)
    console.log("Array new val =>",newVal)

},

    { deep : true}

)





</script>