<script setup>
import { computed } from 'vue'
import { uiState } from '../stores/ui'
const active = computed(() => uiState.loading)
</script>

<template>
  <transition name="fade">
    <div v-if="active" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-sm">
      <div class="flex flex-col items-center gap-6">
        <div class="relative w-32 h-24">
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-12 bg-amber-600 rounded-b-3xl rounded-t-lg shadow-xl"></div>
          <div class="absolute bottom-2 left-[65%] w-6 h-6 border-4 border-amber-600 rounded-full bg-white"></div>
          <div class="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-2">
            <span class="block w-2 h-6 bg-gradient-to-b from-amber-400/70 to-transparent rounded-full animate-steam [animation-delay:0ms]"></span>
            <span class="block w-2 h-8 bg-gradient-to-b from-amber-300/70 to-transparent rounded-full animate-steam [animation-delay:150ms]"></span>
            <span class="block w-2 h-7 bg-gradient-to-b from-amber-500/70 to-transparent rounded-full animate-steam [animation-delay:300ms]"></span>
          </div>
          <div class="absolute -right-6 bottom-2 w-10 h-10 rounded-full border-4 border-gray-900 animate-stir"></div>
          <div class="absolute -right-2 bottom-3 w-12 h-1 bg-gray-900 origin-left animate-stir"></div>
        </div>
        <div class="text-center">
          <p class="text-lg font-bold text-gray-800 tracking-wide">Brewing goodness</p>
          <div class="flex justify-center gap-1 mt-1">
            <span class="w-2 h-2 bg-amber-600 rounded-full animate-bounce [animation-delay:0ms]"></span>
            <span class="w-2 h-2 bg-amber-600 rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span class="w-2 h-2 bg-amber-600 rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
@keyframes steamUp {
  0% { transform: translateY(6px); opacity: 0.0 }
  30% { opacity: 0.7 }
  100% { transform: translateY(-16px); opacity: 0 }
}
.animate-steam {
  animation: steamUp 1.2s ease-in-out infinite;
}
@keyframes stir {
  0% { transform: rotate(0deg) }
  50% { transform: rotate(10deg) }
  100% { transform: rotate(0deg) }
}
.animate-stir {
  animation: stir 1.5s ease-in-out infinite;
}
.fade-enter-active,
.fade-leave-active { transition: opacity .25s ease }
.fade-enter-from,
.fade-leave-to { opacity: 0 }
</style>

