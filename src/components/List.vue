<script setup>
import ToggleStar from './ToggleStar.vue';

const {pokemonName} = defineProps({
  pokemon: String,
  toggle: Function
})
const emit = defineEmits(['open'])

</script>

<template>
 <div @click.self="emit('open')" class="bg-white flex justify-between items-center
  py-2 pr-[10px] pl-[20px] rounded-md font-lato text-[22px] capitalize" >
     <h3 @click.self="emit('open')" class="select-none" >{{pokemon.name}}</h3>
     <ToggleStar :toggleValue="pokemon" :toggleHandler="toggle" />
 </div>
</template>