<template>
    <div class="body p-4 bg-secondary w-100">
        <div>
            <h1>
                welcome {{ name }}
            </h1>
            <button @click="incAge" class="btn btn-primary">increment</button>
            <p> your age is {{ age }} </p>
        </div>
        <div class="alert alert-secondary">
            <p>{{ welcomeMessage }}  </p>
            <p>{{ InfoMessage }}  </p>

        </div>
        <div ref="element">this is ref</div>
        <button class="btn btn-light" @click="$event => console.log(element)">check ref</button>
    </div>
    
</template>


<script setup>
import router from '@/Router';
import { computed, ref } from 'vue';

    const name = ref("salah-eddine")
    const age = ref(26)

    function incAge() {
        age.value ++ ;
    }
    const element = ref(null);
    //computed
    const welcomeMessage = computed(()=> `welcome ${name.value} you age is ${age.value}`)
    const InfoMessage = computed(()=> {
        console.log(router.currentRoute.value.name)
      return  `welcome ${name.value} this is route  ${router.currentRoute.value.name}`

    });




</script>
<style>
.body {
    height: 100vh ;
}
</style>