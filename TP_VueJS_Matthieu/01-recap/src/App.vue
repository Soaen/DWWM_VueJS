<script setup>
  import { ref } from 'vue';
  import Image from './components/Image.vue'
  import Recette from './components/Recette.vue'

  const count = ref(0)

const increment = (number) => count.value += number;

</script>

<template>
  <div class="count-container">
    <h1>Hello Vue</h1>
    <h2> {{ count }}</h2>
    <div>
      <button @click="increment(1)">Incrémenter</button>
      <button @click="increment(-1)" :disabled="count <= -10">Décrémenter</button>
    </div>
    <Image source="a042581f4e29026704d"/>
    <Image/>
    <Image/>
  </div>

  <Recette/>


</template>

<style scoped>
h1, h2{
  text-align: center;
}

button{
  background-color: #add8e6;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  padding: 20px;
  margin: 5px;
}
button:hover{
  background-color: #67b5cf;

}

.count-container{
  display: flex;
  flex-direction: column;
  border-right: white 2px solid;
  padding: 30px;
}

</style>


