<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div>

      <nav>
        <RouterLink to="/">Swipe !</RouterLink>
        <RouterLink to="/recap">Récap</RouterLink>
        <RouterLink to="/connexion">Connexion</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
