<script setup>
import { getAnimals, getBaseUrl, getRandomAnimal, askMatch } from '@/services/api.js'

import { onBeforeMount, ref } from 'vue';

let tempAn = ref([]);

onBeforeMount(() => {
  getRandomAnimal().then(response => tempAn.value = response)
})

const onDontLike = () =>{
  getRandomAnimal().then(response => tempAn.value = response)
}

const onLike = (id) => {
  askMatch(id)
  getRandomAnimal().then(response => tempAn.value = response)
}

</script>

<template>
  <main>
    <div class="animal-container">
      <img v-bind:src="getBaseUrl() + tempAn.picture" alt="Photo de n'animal" class="animal-pic">
      <div>
        <h2>{{ tempAn.firstname }}</h2>
        <p>- {{ tempAn.age }} ans</p>
        <p>À propos</p>
        <p>{{ tempAn.gender }}</p>
        <p>{{ tempAn.description }}</p>
        <p class="searchFor-class">{{ tempAn.searchFor }}</p>
        <button @click="onDontLike">X</button>
        <button @click="onLike(tempAn.id)">❤️</button>
      </div>
    </div>
  </main>
</template>

<style>
p{
  margin: 0
}
.animal-pic{
  height: 100vh;
  width: 300px;
  overflow: hidden;
  object-fit: cover;
}

.animal-container{
  display: flex;
}

.searchFor-class{
  background-color: #0aa2c0;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  color: white;
}

</style>