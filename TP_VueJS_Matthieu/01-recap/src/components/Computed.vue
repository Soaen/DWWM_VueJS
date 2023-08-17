<script setup>
import { ref, computed } from 'vue';

const name = ref('Anna')
const message = ref('Hello')
const reversed = computed(() => {
    console.log('computed');
    return message.value.split('').reverse().join('');
})

</script>

<template>
    <div class="computed-container">
        
        <h2>Computed</h2>

        <p>{{ message }} à l'envers {{ reversed }}</p>

        <input type="text" v-model="message">
        <input type="text" v-model="name">

    </div>
</template>

<style scoped>

.computed-container{
  display: flex;
  flex-direction: column;
  padding: 30px;

}

</style>