const URL = "https://pokeapi.co/api/v2/pokemon";

async function callApi(endpoint = "", method = "GET") {
  try {
    const response = await fetch(URL + endpoint, {
      method: method,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const PokeApi = {
  async getPokemons() {
    const response = await callApi();
    return response.results;
  },
  async getPokemonByName(name) {
    const response = await callApi(`/${name}`);
    return response;
  },
};
