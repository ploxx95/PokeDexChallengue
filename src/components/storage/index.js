import { createStore } from "vuex";
import { PokeApi } from "../api/pokeApi";

const store = createStore({
  state: {
    pokemons: [],
  },
  getters: {
    getNombre(state) {
      return state.nombre;
    },
    // doneTodos (state) {
    //   return state.todos.filter(todo => todo.done)
    // }
  },
  mutations: {
    LOAD_POKEMONS(state, payload) {
      state.pokemons = payload;
      console.log(payload);
    },
    TOGGLE_FAVORITE(state, pokeName) {
      state.pokemons = state.pokemons.map((pokemon) =>
        pokemon.name === pokeName
          ? { ...pokemon, favorite: !pokemon?.favorite }
          : pokemon
      );
      // state.favorite = !state.favorite;
    },
    initialiseStore(state) {
      // Check if the ID exists
      if (localStorage.getItem("store")) {
      }
    },
  },
  actions: {
    async fetchPokemons(state) {
      let data = await PokeApi.getPokemons();
      data = data.map((pokemon) => ({ ...pokemon, favorite: false }));
      state.commit("LOAD_POKEMONS", data);
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
