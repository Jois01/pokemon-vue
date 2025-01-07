<template>
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div class="text-5xl font-bold text-center text-gray-900 my-8">My collection</div>
    <div
      class="grid grid-cols-1 m-10 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
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
      </div>
    </div>
  </div>
</template>

<script>
import { usePokemonStore } from '@/stores/pokemonStore'

export default {
  setup() {
    const pokemonStore = usePokemonStore()

    pokemonStore.fetchPokemons()

    return {
      pokemons: pokemonStore.pokemons,
    }
  },
}
</script>
