import { createStore } from "vuex";

const store = createStore({
  state: {
    favorite: true,
    nombre: "alex",
  },
  getters: {},
  mutations: {
    ToggleFavorite(state) {
      state.favorite = !state.favorite;
    },
  },
  actions: {},
});
export default store;
