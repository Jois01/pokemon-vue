<template>
  <div
    class="bg-white rounded-md container mx-auto flex m-8 md:px-24 md:py-10 md:flex-row flex-col items-center"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
      <div class="col-sel-2">
        <img :src="pokemon.image_url" alt="image" class="w-96" />
      </div>
      <div class="items-center justify-center m-10">
        <h1 class="text-3xl font-bold text-left">{{ pokemon.pokemon }}</h1>
        <div class="items-start text-center" v-for="abiliti in pokemon.abilities" :key="abiliti">
          <div class="bg-gray-900 border border-gray-200 rounded-md text-emerald-600">
            {{ abiliti }}
          </div>
        </div>
        <div class="items-start text-center" v-for="evolu in pokemon.evolutions" :key="evolu">
          <div class="bg-gray-900 border border-gray-200 rounded-md text-emerald-600">
            {{ evolu }}
          </div>
        </div>
        <p class="text-lg text-left justify-center">
          {{ pokemon.location }}
        </p>
        <p class="text-xl font-medium text-gray-900 mt-4 mb-4">$ {{ pokemon.price }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { usePokemonStore } from '@/stores/pokemonStore'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const pokemonStore = usePokemonStore()
    const route = useRoute()
    const pokemon = ref(null)

    onMounted(async () => {
      const id = route.params.id
      await pokemonStore.fetchPokemons()
      pokemon.value = pokemonStore.pokemons.find((p) => p.id === Number(id))
    })

    return {
      pokemon,
    }
  },
}
</script>
