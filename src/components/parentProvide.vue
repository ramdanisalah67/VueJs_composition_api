<template>
  <div class="body container">
    <div>this is parent to provide data to child </div>
    <div>
        this is child inject => <childInject /> 
    </div>
  </div>
</template>
<script setup>
import childInject from '@/components/childInject.vue'
import { provide, ref } from 'vue'

const dataOfUsers = ref([{name:"ahmed",age:23},{name:"omar",age:14}])
const calcSum = (users)=>{
    let Sum = 0
    let numbers = users.flatMap(a=>a.age)
    numbers.forEach(a=>Sum+=a)

    return Sum
}


provide("users",dataOfUsers.value)
provide("calc",calcSum)


</script>