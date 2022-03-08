<script setup>
import InputSearch from '../InputSearch.vue';
import Footer from '../Footer.vue';
import List from '../List.vue';
import {useStore} from 'vuex'
import { computed , onMounted, ref} from 'vue';
import {  useRoute } from 'vue-router';
import CardPokemon from '../CardPokemon.vue';

const store = useStore()
const route = useRoute()
const modal = ref(false)


onMounted(() => {
    store.dispatch('fetchPokemons')
})

const pokemons = computed(() => {
    if(route.path == "/favoritos"){
        return store.state.pokemons.filter((poke)=>poke.favorite == true)
    }else{
        return store.state.pokemons
    }
})

const pokemon = computed(()=> store.state.pokemon)

const loader = computed(()=> store.state.loading)

function toggleHandler(name) {
    store.dispatch('toggleFav',name)
}


function openModal(name) {
    modal.value=true;
    store.dispatch('fetchPokemonDetail',name)
}

</script>
<template>

<main class="relative h-screen">
    <div class="px-[30px] pt-9 " >
        <InputSearch/>
        <section class="flex flex-col gap-[10px] mt-10">
            <List @open="openModal(pokemon.name)" v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" :toggle="toggleHandler"></List>
        </section>
    </div>
    <Footer/>
    <div v-if="modal"  id="modal" class="absolute bg-slate-900 w-full h-full top-0 left-0 bg-opacity-50">
        <div v-if="loader" class="flex justify-center items-center h-full "  >
            <img class="animate-spin  " src="/loader.png" />
          </div>
       <div v-if="!loader" class="flex justify-center items-center h-full" >
            <CardPokemon @close="modal = false " :pokemon="pokemon" :toggle="toggleHandler" />
        </div>
    </div>
</main>
</template>