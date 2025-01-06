<template>
  <!-- Modal -->
  <div
    v-if="modalOpen"
    class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg p-4 shadow-lg relative max-w-lg mx-auto">
      <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-900" @click="closeModal">
        ✖
      </button>
      <div class="content mt-10">
      <p>tambahkan pokemon ini ke koleksi?</p>
      </div>
    </div>
  </div>
</template>
