<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="items-center flex justify-center">
    <div class="wrapper items-center">
      <img alt="Vue logo" class="size-40 place-items-center" src="@/assets/logo.svg" />
      <nav class="flex items-center gap-4 justify-center mt-6">
        <RouterLink
          class="bg-gray-800 py-1 px-3 rounded-md text-emerald-500 hover:bg-emerald-500 hover:text-gray-800 ease-in-out duration-300 shadow-lg shadow-black hover:shadow-none border hover:border-gray-800"
          to="/"
          >Home</RouterLink
        >
        <RouterLink
          class="bg-gray-800 py-1 px-3 rounded-md text-emerald-500 hover:bg-emerald-500 hover:text-gray-800 ease-in-out duration-300 shadow-lg shadow-black hover:shadow-none border hover:border-gray-800"
          to="/about"
          >My pokemon</RouterLink
        >
      </nav>
    </div>
  </div>

  <RouterView />
</template>
