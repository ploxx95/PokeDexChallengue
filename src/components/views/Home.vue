<script setup>
import InputSearch from '../InputSearch.vue';
import Footer from '../Footer.vue';
import List from '../List.vue';
import {useStore} from 'vuex'
import { computed , onMounted} from 'vue';

const store = useStore()
onMounted(() => {
    store.dispatch('fetchPokemons')
})

const pokemons = computed(() => store.state.pokemons)
// const nombre = computed(() => store.getters.getNombre)

function toggleHandler(name) {
    store.dispatch('toggleFav',name)
}

console.log(pokemons)
</script>
<template>

<main class="relative h-screen">
<div class="px-[30px] pt-9 " >
    <InputSearch/>
    <section class="flex flex-col gap-[10px] mt-10">
        <List v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" :toggle="toggleHandler"></List>
    </section>
</div>
<Footer/>
</main>
</template>