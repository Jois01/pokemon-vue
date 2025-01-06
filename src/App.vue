<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="items-center flex justify-center">
    <div class="wrapper items-center">
      <div class="items-center flex justify-center">
        <img alt="Vue logo" class="size-40 place-items-center" src="@/assets/logo.svg" />
      </div>
      <nav class="flex items-center gap-4 justify-center mt-6">
        <button
          class="bg-gray-800 py-1 px-3 rounded-md text-emerald-500 hover:bg-emerald-500 hover:text-gray-800 ease-in-out duration-300 shadow-lg shadow-black hover:shadow-none border hover:border-gray-800"
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
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </button>
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
