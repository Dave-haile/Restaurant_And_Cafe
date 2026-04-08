<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')
const filters = ['all', 'interior', 'food', 'drinks', 'events']

const galleryItems = [
  { id: 1, category: 'interior', title: 'Our Cozy Corner', size: 'large', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80' },
  { id: 2, category: 'food', title: 'Avocado Toast', size: 'normal', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80' },
  { id: 3, category: 'drinks', title: 'Artisan Latte', size: 'normal', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80' },
  { id: 4, category: 'food', title: 'Pan-Seared Salmon', size: 'normal', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80' },
  { id: 5, category: 'interior', title: 'Main Dining Area', size: 'tall', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80' },
  { id: 6, category: 'food', title: 'Chocolate Lava Cake', size: 'normal', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80' },
  { id: 7, category: 'drinks', title: 'Lavender Latte', size: 'normal', image: 'https://images.unsplash.com/photo-1594631252845-29fc458631b6?auto=format&fit=crop&q=80' },
  { id: 8, category: 'food', title: 'Spiced Hummus', size: 'normal', image: 'https://images.unsplash.com/photo-1577906030558-77358271dc44?auto=format&fit=crop&q=80' },
  { id: 9, category: 'interior', title: 'Our Outdoor Patio', size: 'wide', image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80' },
  { id: 10, category: 'food', title: 'Quinoa Salad', size: 'normal', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80' },
  { id: 11, category: 'drinks', title: 'Matcha Lemonade', size: 'normal', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80' },
  { id: 12, category: 'events', title: 'Live Music Night', size: 'normal', image: 'https://images.unsplash.com/photo-1514525253361-bee24387052b?auto=format&fit=crop&q=80' }
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return galleryItems
  return galleryItems.filter(item => item.category === activeFilter.value)
})

const getGridClasses = (size) => {
  switch (size) {
    case 'large': return 'md:col-span-2 md:row-span-2'
    case 'tall': return 'md:row-span-2'
    case 'wide': return 'md:col-span-2'
    default: return ''
  }
}
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <header class="relative py-24 bg-gray-900 text-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?auto=format&fit=crop&q=80" 
          alt="Gallery background" 
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4">
        <span class="text-amber-400 font-semibold uppercase tracking-widest text-sm">Visual Journey</span>
        <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mt-4 mb-6">Gallery</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">A glimpse into The Hearthstone experience</p>
      </div>
    </header>

    <!-- Filter Bar -->
    <div class="bg-white sticky top-20 z-40 border-b border-gray-100 shadow-sm overflow-x-auto">
      <div class="max-w-7xl mx-auto px-4 flex justify-center space-x-4 py-6 whitespace-nowrap">
        <button 
          v-for="filter in filters" 
          :key="filter"
          @click="activeFilter = filter"
          :class="['px-6 py-2 rounded-full font-medium transition-all capitalize', 
            activeFilter === filter ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' : 'text-gray-500 hover:text-amber-700 hover:bg-amber-50']"
        >
          {{ filter }}
        </button>
      </div>
    </div>

    <!-- Gallery Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          <transition-group 
            name="list"
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-300 ease-in absolute"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div 
              v-for="item in filteredItems" 
              :key="item.id"
              :class="['group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500', getGridClasses(item.size)]"
            >
              <img 
                :src="item.image" 
                :alt="item.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span class="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">{{ item.category }}</span>
                <h3 class="text-white text-2xl font-bold font-serif">{{ item.title }}</h3>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </section>

    <!-- Instagram CTA -->
    <section class="py-24 bg-amber-50/50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold font-serif text-gray-900 mb-4">Follow Our Journey</h2>
        <p class="text-gray-600 mb-8 text-lg">Tag us in your photos for a chance to be featured!</p>
        <a href="#" class="inline-flex items-center gap-2 text-xl font-bold text-amber-700 hover:text-amber-800 transition-colors">
          @thehearthstonecafe
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.list-move {
  transition: transform 0.5s ease;
}
</style>
