<template>
  <div class="body">
        <p>hello from child inject</p>
        <table class="table w-25 table-dark ">
          <tr class="bg-secondary"><td>name</td><td>age</td></tr>
          <tbody><tr v-for="u in listOfUsers" :key="u.name"><td> {{ u.name }} </td><td> {{ u.age }} </td></tr></tbody>
        </table>
        <button @click="Sum(listOfUsers)" class="btn btn-info">Calc Sum</button>
        <div class="alert alert-info"> {{ result }} </div>
  </div>
</template>
<script setup>
import { inject, ref } from "vue";

const listOfUsers = inject("users")
const Sum = inject("calc")
const result = ref(Sum(listOfUsers));

</script>