<script setup>
  import { ref } from 'vue';

  let title = 'Recettes';
  let isOpen = ref(false)
  const recettes = ['Couscous', 'Fondue', 'Salade César'];
</script>

<template>
  <div class="recette-container">
    <div>
      <h1>{{ title }}</h1>
      <ul v-show="isOpen">
        <li v-for="recette in recettes">{{ recette }}</li>
      </ul>
    </div>
    <button @click="isOpen = !isOpen">Afficher / Cacher la liste</button>
  </div>
  
</template>

<style scoped>

.recette-container{
  display: flex;
  flex-direction: column;
  padding: 30px;

}

</style>