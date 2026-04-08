<script setup>
import { ref } from 'vue'
import { Menu as MenuIcon, X, Coffee } from 'lucide-vue-next'
import router from '../router'

const isOpen = ref(false)
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const preload = (path) => {
  const r = router.resolve(path)
  const rec = r.matched[r.matched.length - 1]
  if (rec && rec.components && typeof rec.components.default === 'function') {
    rec.components.default()
  } else if (rec && typeof rec.component === 'function') {
    rec.component()
  }
}
</script>

<template>
  <nav class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center gap-2 group">
            <div class="bg-amber-600 p-2 rounded-lg text-white group-hover:bg-amber-700 transition-colors">
              <Coffee class="w-6 h-6" />
            </div>
            <span class="text-xl font-bold tracking-tight text-gray-900 font-serif">The Hearthstone</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            @mouseenter="preload(link.path)"
            class="text-gray-600 hover:text-amber-700 font-medium transition-colors"
            active-class="text-amber-700 border-b-2 border-amber-600"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden items-center">
          <button 
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <MenuIcon v-if="!isOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-show="isOpen" class="md:hidden bg-white border-b border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
                @mouseenter="preload(link.path)"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-amber-700 hover:bg-amber-50"
            active-class="bg-amber-50 text-amber-700"
            @click="isOpen = false"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>
