<script setup>
import { ref } from 'vue';

const name = ref('')
const age = ref(0)
const genre = ref('')
const names = ref(['Laura', 'Antoine', 'Marie', 'Matthieu', 'Marine', 'Paolo', 'Anna', 'Jules'])

  const generatePerson = () => {
    name.value =  names.value[Math.floor(Math.random() * names.value.length)];
    age.value = Math.floor(Math.random()  * 99 +1)
  }

</script>

<template>
  <div>

    <div v-if="name.length > 15 || age > 100 || age < 0" class="error-container">

      <p>Veuillez entrer un nom et un âge valide !</p>

    </div>

    <div class="infos-container" v-else>
      <p>Mon nom est <span>{{ name }}</span> et j'ai {{ age }} ans.</p>
      <p>Dans 10 ans, j'aurais {{ age + 10 }} ans.</p>
      <p>Mon nom se compose de {{ name.length }} caractères.</p>
      <p>Mon nom en majuscule est {{ name.toUpperCase() }}.</p>
    </div>

    <input type="text" v-model="name" v-bind:class="name.length > 15 ? 'error' : ''">
    <p class="error-msg" v-if="name.length >= 15">Maximum 15 caractères.</p>
    <input type="number" v-model="age" v-bind:class="age > 100 ? 'error' : ''">
    <p class="error-msg" v-if="age > 100 || age < 0">Votre âge doit-être contenu entre 0 et 100.</p>
    <select v-model="genre" :class="genre == 'Homme' ? 'homme-select' : genre == 'Femme' ? 'femme-select' : genre == 'Autre' ? 'autre-select' : ''">
      <option disabled selected>----</option>
      <option>Homme</option>
      <option>Femme</option>
      <option>Autre</option>
    </select>

    <button @click="generatePerson">Générer une personne</button>

  </div>
</template>

<style scoped>

.infos-container{
  background-color: aquamarine;
  border-radius: 15px;
  padding: 10px;
  color: black;

}

span{
  font-weight: bold;
}

.error{
  background-color: rgb(123, 0, 0);
  border: red 1px solid;
}

.error-msg{
  color: red;
  margin: 0;
}

.error-container{
  background-color: red;
  border-radius: 15px;
  padding: 10px;
  color: black;
}

.homme-select{
  background-color: blue;
}
.femme-select{
  background-color: pink;
}
.autre-select{
  background-color: green;
}

</style>