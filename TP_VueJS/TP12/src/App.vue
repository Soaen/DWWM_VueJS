<script setup>

import Alert from './components/Alert.vue'

</script>

<template>

  <Alert>

    <template v-slot:alerttitle>
      
      Super Alerte ! 

    </template>
    <template v-slot:alerttext>
      
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, aliquid. 

    </template>

  </Alert>


  <Alert>

    <template v-slot:alerttitle>
      
      Méga Alerte ! 

    </template>
    <template v-slot:alerttext>
      
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, aliquid. 

    </template>

  </Alert>


  <Alert>

    <template v-slot:alerttitle>
      
      La classique

    </template>
    <template v-slot:alerttext>
      
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, aliquid. 

    </template>

  </Alert>

</template>