import { createStore } from "vuex";
import { PokeApi } from "../api/pokeApi";

const store = createStore({
  state: {
    pokemons: [],
    pokemon: {},
    loading: false,
  },
  getters: {
    getPokemon(state) {
      return state.nombre;
    },
    filterPokemons(state) {
      if (state.filter.querys.length > 2) {
        return (pokemonsFilter = state.pokemons.filter((poke) =>
          poke.name.toLowerCase().includes(state.filter.querys)
        ));
      } else {
        return state.pokemons;
      }
    },
  },
  mutations: {
    LOAD_POKEMONS(state, payload) {
      state.pokemons = payload;
    },
    LOAD_POKEMON_NAME(state, payload) {
      state.pokemon = payload;
      console.log(payload);
    },
    LOADER(state, payload) {
      state.loading = payload;
    },
    TOGGLE_FAVORITE(state, pokeName) {
      state.pokemons = state.pokemons.map((pokemon) =>
        pokemon.name === pokeName
          ? { ...pokemon, favorite: !pokemon?.favorite }
          : pokemon
      );
      localStorage.setItem("store", JSON.stringify(state.pokemons));
    },

    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("store")) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
  },
  actions: {
    async fetchPokemons(state) {
      const data = JSON.parse(localStorage.getItem("store"));
      if (!data.pokemons.length) {
        let b = localStorage.getItem("store");
        let data = await PokeApi.getPokemons();
        data = data.map((pokemon) => ({ ...pokemon, favorite: false }));
        state.commit("LOAD_POKEMONS", data);
      }
    },
    async fetchPokemonDetail(state, name) {
      state.commit("LOADER", true);

      let data = await PokeApi.getPokemonByName(name);

      state.commit("LOAD_POKEMON_NAME", data);
      state.commit("LOADER", false);
    },
    toggleFav(state, name) {
      state.commit("TOGGLE_FAVORITE", name);
    },
  },
});
// Subscribe to store updates
store.subscribe((mutation, state) => {
  // Store the state object as a JSON string
  localStorage.setItem("store", JSON.stringify(state));
});
export default store;
