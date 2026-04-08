<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')
const categories = [
  { id: 'breakfast', name: 'Breakfast', subtitle: 'Served until 11:00 AM' },
  { id: 'appetizers', name: 'Appetizers', subtitle: 'Perfect for sharing' },
  { id: 'salads', name: 'Salads', subtitle: 'Fresh and vibrant' },
  { id: 'mains', name: 'Mains', subtitle: 'Hearty and flavorful' },
  { id: 'desserts', name: 'Desserts', subtitle: 'A sweet ending' },
  { id: 'drinks', name: 'Drinks', subtitle: 'Refreshments for every mood' },
]

const menuItems = [
  {
    category: 'breakfast',
    title: 'Sunrise Avocado Toast',
    price: '$12.95',
    description: 'Toasted sourdough, mashed avocado, chili flakes, feta cheese, poached egg',
    tags: ['vegetarian'],
    icon: '🥑',
    gradient: 'from-amber-100 to-amber-300'
  },
  {
    category: 'breakfast',
    title: 'Buttermilk Pancakes',
    price: '$11.50',
    description: 'Fluffy pancakes with maple syrup, fresh berries, and whipped butter',
    tags: ['vegetarian'],
    icon: '🥞',
    gradient: 'from-amber-50 to-amber-200'
  },
  {
    category: 'breakfast',
    title: 'Hearty Breakfast Bowl',
    price: '$14.95',
    description: 'Scrambled eggs, roasted potatoes, bacon, avocado, and cheddar cheese',
    tags: [],
    icon: '🍳',
    gradient: 'from-yellow-100 to-yellow-300'
  },
  {
    category: 'breakfast',
    title: 'Açaí Bowl',
    price: '$10.50',
    description: 'Blended açaí, granola, banana, coconut flakes, and fresh berries',
    tags: ['vegetarian', 'gluten-free'],
    icon: '🍓',
    gradient: 'from-rose-100 to-rose-300'
  },
  {
    category: 'appetizers',
    title: 'Spiced Hummus with Pita',
    price: '$8.50',
    description: 'Creamy hummus infused with exotic spices served with warm pita bread',
    tags: ['vegan'],
    icon: '🥙',
    gradient: 'from-yellow-50 to-yellow-200'
  },
  {
    category: 'appetizers',
    title: 'Crispy Calamari',
    price: '$12.00',
    description: 'Lightly fried calamari with lemon aioli and marinara sauce',
    tags: [],
    icon: '🍤',
    gradient: 'from-orange-100 to-orange-300'
  },
  {
    category: 'mains',
    title: 'Pan-Seared Salmon',
    price: '$18.95',
    description: 'Fresh salmon fillet pan-seared to perfection, served with roasted asparagus and lemon-dill sauce',
    tags: ['gluten-free'],
    icon: '🐟',
    gradient: 'from-rose-100 to-rose-300'
  },
  {
    category: 'desserts',
    title: 'Chocolate Lava Cake',
    price: '$7.95',
    description: 'Warm molten chocolate cake with vanilla ice cream and berry compote',
    tags: ['vegetarian'],
    icon: '🍫',
    gradient: 'from-stone-600 to-stone-800'
  }
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'all') return menuItems
  return menuItems.filter(item => item.tags.includes(activeFilter.value))
})

const itemsByCategory = (category) => {
  return filteredItems.value.filter(item => item.category === category)
}

const setFilter = (filter) => {
  activeFilter.value = activeFilter.value === filter ? 'all' : filter
}
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <header class="relative py-24 bg-gray-900 text-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" 
          alt="Menu background" 
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4">
        <span class="text-amber-400 font-semibold uppercase tracking-widest text-sm">Our Offerings</span>
        <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mt-4 mb-6">Our Menu</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">Fresh, locally sourced ingredients crafted with care</p>
      </div>
    </header>

    <!-- Menu Navigation -->
    <div class="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm overflow-x-auto">
      <div class="max-w-7xl mx-auto px-4 flex justify-center space-x-8 py-4 whitespace-nowrap">
        <a 
          v-for="cat in categories" 
          :key="cat.id"
          :href="`#${cat.id}`"
          class="text-gray-600 hover:text-amber-700 font-medium transition-colors"
        >
          {{ cat.name }}
        </a>
      </div>
    </div>

    <!-- Filter Bar -->
    <div class="bg-gray-50 border-b border-gray-100 py-6">
      <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
        <span class="text-gray-500 font-medium">Dietary Filters:</span>
        <div class="flex flex-wrap justify-center gap-3">
          <button 
            @click="setFilter('vegetarian')"
            :class="['px-4 py-2 rounded-full border transition-all flex items-center gap-2', 
              activeFilter === 'vegetarian' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-white border-gray-200 text-gray-600 hover:border-green-300']"
          >
            <span class="text-green-600">🌿</span> Vegetarian
          </button>
          <button 
            @click="setFilter('vegan')"
            :class="['px-4 py-2 rounded-full border transition-all flex items-center gap-2', 
              activeFilter === 'vegan' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-white border-gray-200 text-gray-600 hover:border-green-300']"
          >
            <span class="text-green-600">🌱</span> Vegan
          </button>
          <button 
            @click="setFilter('gluten-free')"
            :class="['px-4 py-2 rounded-full border transition-all flex items-center gap-2', 
              activeFilter === 'gluten-free' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:border-blue-300']"
          >
            <span class="text-blue-600">✓</span> Gluten-Free
          </button>
          <button 
            v-if="activeFilter !== 'all'"
            @click="activeFilter = 'all'"
            class="text-amber-600 font-medium hover:underline ml-2"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Sections -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div v-for="cat in categories" :key="cat.id" :id="cat.id" class="mb-24 scroll-mt-32">
        <div class="text-center mb-12">
          <span class="text-amber-600 font-semibold uppercase tracking-widest text-xs">{{ cat.subtitle }}</span>
          <h2 class="text-3xl md:text-4xl font-bold font-serif text-gray-900 mt-2">{{ cat.name }}</h2>
          <div class="w-16 h-1 bg-amber-200 mx-auto mt-4 rounded-full"></div>
        </div>

        <div v-if="itemsByCategory(cat.id).length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="item in itemsByCategory(cat.id)" 
            :key="item.title"
            class="group flex gap-6 p-6 rounded-3xl bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100"
          >
            <div :class="['w-24 h-24 rounded-2xl bg-gradient-to-br flex items-center justify-center text-3xl flex-shrink-0 shadow-sm', item.gradient]">
              {{ item.icon }}
            </div>
            <div class="flex-grow">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-gray-900 font-serif">{{ item.title }}</h3>
                <span class="text-lg font-bold text-amber-700">{{ item.price }}</span>
              </div>
              <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ item.description }}</p>
              <div class="flex gap-2">
                <span v-if="item.tags.includes('vegetarian')" class="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-md tracking-wider">🌿 Vegetarian</span>
                <span v-if="item.tags.includes('vegan')" class="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase rounded-md tracking-wider">🌱 Vegan</span>
                <span v-if="item.tags.includes('gluten-free')" class="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded-md tracking-wider">✓ GF</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-12 text-gray-400">
          No items found matching your filter in this category.
        </div>
      </div>
    </div>
  </div>
</template>
