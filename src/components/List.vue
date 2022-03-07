<script setup>
import { ref, onMounted } from 'vue'
import ToggleStar from './ToggleStar.vue';

const pokemonName = ref("Pokémon #2")

</script>


<template>
 <div class="bg-white flex justify-between items-center
  py-2 pl-[10px] pr-[20px] rounded-md" >
     <h3 class="" >{{pokemonName}}</h3>
     <ToggleStar/>
 </div>
</template>