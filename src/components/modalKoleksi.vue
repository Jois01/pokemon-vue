<template>
  <!-- Modal -->
  <div class="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg p-4 shadow-lg relative max-w-lg mx-auto">
      <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-900" @click="closeModal">
        ✖
      </button>
      <div class="content mt-10 p-5">
        <p>tambahkan pokemon ini ke koleksi?</p>
        <div class="flex gap-4 mt-8">
            <button
            @click="closeModal"
            class="flex gap-2 items-center bg-red-600 border border-gray-900 py-1 px-3 text-white rounded-md shadow-md shadow-black hover:bg-red-500 hover:shadow-none ease-in-out duration-700"
          >
            cancel
          </button>
          <button
            @click="open = true"
            class="flex gap-2 items-center bg-blue-500 py-1 px-3 border border-gray-300 text-white rounded-md shadow-md shadow-black hover:bg-blue-600 hover:shadow-none ease-in-out duration-700"
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
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },
}
</script>
