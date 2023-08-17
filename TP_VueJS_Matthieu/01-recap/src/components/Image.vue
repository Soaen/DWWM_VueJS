<script setup>

    defineProps(['source'])

</script>



<template>
        
    <img :src="`https://i.pravatar.cc/150?u=${source}`" alt="Photo de Profil">

</template>