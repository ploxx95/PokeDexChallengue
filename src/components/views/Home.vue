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
let searchText = ref('')

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

function filteredList() {
      let filterPoke= pokemons.value.filter(data => data.name.toLowerCase().includes(searchText.value.toLowerCase()))
        return filterPoke
    }

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
        <InputSearch class=" outline-none  h-[50px] w-full rounded-md select-none"
  placeholder="Search"  v-model="searchText"  @keyup.enter="handleSubmit" />
  
        <!-- <input id="inputSearch" class=" outline-none  h-[50px] w-full rounded-md select-none"
  placeholder="Search"  v-model="searchText"  @keyup.enter="handleSubmit" /> -->
        <section class="flex flex-col gap-[10px] mt-10">
            <div v-if="filteredList().length == 0" class="text-center" >
                <h2 class="text-4xl font-bold font-lato mb-[10px]" >Uh-oh!</h2>
                <p class="text-xl font-medium font-lato mb-6 " >You look lost on your journey!</p>
                <button id="primary" @click="searchText = ''" >Go back home</button>
            </div>
            <List  @open="openModal(pokemon?.name)" v-for="pokemon in filteredList()" :key="pokemon?.name" :pokemon="pokemon" :toggle="toggleHandler"></List>
        </section>
    </div>
    <Footer />
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

<style scoped>
#inputSearch {
  background: url(./../../assets/searchIcon.png) no-repeat scroll 16px 16px;
  background-color: white;
  padding-left:43px;
}
#inputSearch::placeholder{
  color: #BFBFBF;
}
</style>