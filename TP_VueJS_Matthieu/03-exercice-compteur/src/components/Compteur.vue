<script setup>

import { defineProps, ref, computed } from 'vue';

const nbParams = defineProps(['start', 'max'])

let actualNb = ref(nbParams.start)

const changeNb = (e) => {
    actualNb.value = actualNb.value += e
}

</script>

<template>

    <h1>Compteur</h1>

    <p :class="actualNb = max ? 'red' : ''">{{ actualNb }}</p>

    <button @click="changeNb(1)" :disabled="actualNb >= max">+</button>
    <button @click="changeNb(-1)" :disabled="actualNb <= 0">-</button>

</template>

<style scoped>



</style>