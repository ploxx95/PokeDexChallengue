<script setup>
import { ref, onMounted } from 'vue'
import ToggleStar from './ToggleStar.vue';
import CloseIcon from '../assets/icon/CloseIcon.vue';

const {pokemon} = defineProps({
  pokemon: Object,
  toggle: Function
})
const emit = defineEmits(['close'])

</script>


<template>
<div class="min-w-min	">
    <div id="containerImg" class="relative" >
        <!-- <img :src="pokemon?.sprites?.other.["official-artwork"].front_default" /> -->
        <img width="180" height="180" :src="pokemon?.sprites?.other?.['official-artwork']?.front_default" />
    <CloseIcon @click="emit('close')" class="absolute right-4 top-4" />
    </div>

    <div id="infoCard" class="bg-white px-[30px] pb-5 pt-[10px] ">
 
        <p class="capitalize" ><span>Name :  </span>{{pokemon?.name}}</p>
        <hr>
        <p><span>Weight :  </span>{{pokemon?.weight}}</p>
        <hr>
        <p><span>Height :  </span>{{pokemon?.height}}</p>
        <hr>
        <p class="capitalize" ><span>Types :  </span>{{pokemon?.types.map(poke=>poke.type.name).join(", ")}}</p>
        <hr>

    <div class="flex justify-between mt-5">

        <button  id="primary">Share to my friends</button>   
        <ToggleStar :toggleValue="pokemon" :toggleHandler="toggle" />
    </div>
    </div>

</div>
</template>


<style scoped>
#containerImg{
    background: url(../assets/landscape.png) no-repeat;
    background-position: center center;
    background-size: cover;
    padding:20px 0;
    min-height: 220px;
    display: flex;
    justify-content: center;
}
#infoCard hr {
   border-color: #E8E8E8;
}

#infoCard p {
    font-size: 18px;
    color:#5E5E5E;
    padding: 10px 0;
}
#infoCard p span{
font-weight: bold;
}
</style>
<!-- 
 const filterPokemon = state.pokemons.filter(
        (poke) => (poke.name = payload.name)
      );
      filterPokemon; -->