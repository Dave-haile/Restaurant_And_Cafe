<script setup>
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-vue-next'

const quickLinks = [
  { name: 'Menu', path: '/menu' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="col-span-1 md:col-span-2">
          <router-link to="/" class="flex items-center gap-2 group mb-6">
            <div class="bg-amber-600 p-2 rounded-lg text-white group-hover:bg-amber-700 transition-colors">
              <Coffee class="w-6 h-6" />
            </div>
            <span class="text-2xl font-bold tracking-tight text-white font-serif">The Hearthstone</span>
          </router-link>
          <p class="text-gray-400 max-w-sm mb-6 leading-relaxed">
            Where Moments Are Made. Nestled in the heart of downtown, offering a warm and inviting space for handcrafted food and delightful conversation.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors group">
              <Facebook class="w-5 h-5 group-hover:text-white" />
            </a>
            <a href="#" class="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors group">
              <Instagram class="w-5 h-5 group-hover:text-white" />
            </a>
            <a href="#" class="p-2 bg-gray-800 rounded-full hover:bg-amber-600 transition-colors group">
              <Twitter class="w-5 h-5 group-hover:text-white" />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Quick Links</h4>
          <ul class="space-y-4">
            <li v-for="link in quickLinks" :key="link.path">
              <router-link 
                :to="link.path" 
                class="hover:text-amber-500 transition-colors"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-white mb-6">Contact</h4>
          <address class="not-italic space-y-4">
            <p>123 Main Street<br>Downtown District<br>Your City, ST 12345</p>
            <p class="text-amber-500 font-semibold">(555) 123-4567</p>
            <p>hello@hearthstone.cafe</p>
          </address>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} The Hearthstone Café & Bistro. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
