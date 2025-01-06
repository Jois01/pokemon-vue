<template>
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div class="text-5xl font-bold text-center text-gray-900 my-8">Pokemon</div>
    <div
      class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <div
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        class="group border border-gray-300 bg-white shadow-md shadow-gray-300 pb-4 rounded-md p-2"
      >
        <img :src="pokemon.image_url" class="w-full rounded-lg bg-gray-200" />
        <h3 class="mt-4 text-xl font-bold text-gray-900">{{ pokemon.pokemon }}</h3>
        <div class="mt-1 gap-2 font-medium text-gray-900 grid grid-cols-2">
          <div class="items-start text-center" v-for="abiliti in pokemon.abilities" :key="abiliti">
            <div class="bg-gray-900 border border-gray-200 rounded-md text-emerald-600">
              {{ abiliti }}
            </div>
          </div>
        </div>
        <div class="flex gap-2 mt-4">
          <button
            class="flex gap-2 text-white items-center bg-cyan-700 border hover:border-gray-900 py-1 px-3 hover:text-gray-900 rounded-md shadow-md shadow-black hover:bg-cyan-500 hover:shadow-none ease-in-out duration-700"
          >
            view
          </button>
          <button
            @click="open = true"
            class="flex gap-2 text-white items-center bg-cyan-700 border hover:border-gray-900 py-1 px-3 hover:text-gray-900 rounded-md shadow-md shadow-black hover:bg-cyan-500 hover:shadow-none ease-in-out duration-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            save
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal -->
  <modalKoleksi v-if="open" @close-modal="closeModal" />
</template>
<script>
import modalKoleksi from './modalKoleksi.vue'
import { usePokemonStore } from '@/stores/pokemonStore'
export default {
  data() {
    return {
      open: false,
    }
  },
  components: { modalKoleksi },
  methods: {
    closeModal() {
      this.open = false
    },
  },
  setup() {
    const pokemonStore = usePokemonStore()

    pokemonStore.fetchPokemons()

    return {
      pokemons: pokemonStore.pokemons,
    }
  },
}
</script>
