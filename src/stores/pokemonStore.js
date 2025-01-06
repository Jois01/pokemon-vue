import { defineStore } from 'pinia';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
  }),
  actions: {
    async fetchPokemons() {
      try {
        const response = await fetch('https://dummyapi.online/api/pokemon');
        const data = await response.json();

        this.pokemons = data;
      } catch (error) {
        console.error('Failed to fetch Pokémon:', error);
      }
    },
  },
});
