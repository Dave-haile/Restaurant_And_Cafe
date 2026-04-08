<script setup>
import { ArrowRight, Utensils, Coffee, Heart, Clock, MapPin, Phone, Facebook, Instagram } from 'lucide-vue-next'

const featuredDishes = [
  {
    title: 'Sunrise Avocado Toast',
    description: 'Toasted sourdough, mashed avocado, chili flakes, feta cheese, poached egg',
    price: '$12.95',
    icon: '🥑',
    gradient: 'from-amber-100 to-amber-300'
  },
  {
    title: 'Pan-Seared Salmon',
    description: 'Fresh salmon fillet pan-seared to perfection, served with roasted asparagus and lemon-dill sauce',
    price: '$18.95',
    icon: '🐟',
    gradient: 'from-rose-100 to-rose-300'
  },
  {
    title: 'Chocolate Lava Cake',
    description: 'Warm molten chocolate cake with vanilla ice cream and berry compote',
    price: '$7.95',
    icon: '🍫',
    gradient: 'from-stone-600 to-stone-800'
  },
  {
    title: 'Artisan Latte',
    description: 'Expertly brewed espresso with velvety steamed milk and latte art',
    price: '$5.50',
    icon: '☕',
    gradient: 'from-amber-200 to-amber-400'
  }
]

const features = [
  {
    title: 'Locally Sourced',
    description: 'Ingredients from nearby farms and producers',
    icon: '🌿'
  },
  {
    title: 'Artisan Coffee',
    description: 'Small-batch roasted, expertly prepared',
    icon: '☕'
  },
  {
    title: 'Community First',
    description: 'A gathering place for friends and neighbors',
    icon: '🤝'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
          alt="Café atmosphere" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="relative z-20 max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
        <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mb-6 tracking-tight">
          Welcome to The Hearthstone
        </h1>
        <p class="text-xl md:text-2xl text-amber-200 font-medium mb-8 uppercase tracking-widest">
          Where Moments Are Made
        </p>
        <p class="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Nestled in the heart of downtown, The Hearthstone offers a warm and inviting space to enjoy handcrafted food, expertly brewed coffee, and delightful conversation.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/menu" class="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-amber-500/20 flex items-center gap-2">
            View Our Menu <ArrowRight class="w-5 h-5" />
          </router-link>
          <router-link to="/reservations" class="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-semibold transition-all shadow-lg">
            Book a Table
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Dishes -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-amber-600 font-semibold uppercase tracking-widest text-sm">Our Favorites</span>
          <h2 class="text-3xl md:text-4xl font-bold font-serif text-gray-900 mt-2 mb-4">Featured Dishes</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Discover what makes The Hearthstone special with our hand-picked favorites.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="dish in featuredDishes" 
            :key="dish.title"
            class="group bg-gray-50 rounded-3xl p-6 transition-all hover:shadow-xl hover:-translate-y-2 border border-gray-100"
          >
            <div :class="['w-full aspect-square rounded-2xl bg-gradient-to-br mb-6 flex items-center justify-center text-5xl', dish.gradient]">
              {{ dish.icon }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 font-serif">{{ dish.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">{{ dish.description }}</p>
            <span class="text-lg font-bold text-amber-700">{{ dish.price }}</span>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <router-link to="/menu" class="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-800 group">
            View Full Menu <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-24 bg-amber-50/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-amber-600 font-semibold uppercase tracking-widest text-sm">The Experience</span>
            <h2 class="text-3xl md:text-4xl font-bold font-serif text-gray-900 mt-2 mb-6">A Place to Connect</h2>
            <p class="text-gray-600 text-lg mb-8 leading-relaxed">
              At The Hearthstone, we believe that great food brings people together. Our carefully curated atmosphere combines rustic charm with modern comfort, creating the perfect setting for everything from morning coffee to evening celebrations.
            </p>
            
            <div class="space-y-8">
              <div v-for="feature in features" :key="feature.title" class="flex gap-4">
                <div class="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl flex-shrink-0">
                  {{ feature.icon }}
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">{{ feature.title }}</h4>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              </div>
            </div>
            
            <router-link to="/about" class="mt-10 inline-block px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg">
              Our Story
            </router-link>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4 pt-8">
              <div class="rounded-3xl overflow-hidden shadow-lg h-64">
                <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80" alt="Interior" class="w-full h-full object-cover" />
              </div>
              <div class="rounded-3xl overflow-hidden shadow-lg h-48 bg-amber-200 flex items-center justify-center text-4xl">
                ☕
              </div>
            </div>
            <div class="space-y-4">
              <div class="rounded-3xl overflow-hidden shadow-lg h-48 bg-rose-200 flex items-center justify-center text-4xl">
                🌿
              </div>
              <div class="rounded-3xl overflow-hidden shadow-lg h-64">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80" alt="Food" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-6">
              <Clock class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-serif">Hours</h3>
            <ul class="text-gray-600 space-y-2">
              <li><strong>Mon – Fri:</strong> 7:00 AM – 10:00 PM</li>
              <li><strong>Sat:</strong> 8:00 AM – 11:00 PM</li>
              <li><strong>Sun:</strong> 8:00 AM – 9:00 PM</li>
            </ul>
          </div>

          <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-6">
              <MapPin class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-serif">Location</h3>
            <p class="text-gray-600">
              123 Main Street<br>
              Downtown District<br>
              Your City, ST 12345
            </p>
            <router-link to="/contact" class="mt-4 text-amber-700 font-semibold hover:underline">Get Directions</router-link>
          </div>

          <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
            <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-6">
              <Phone class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-serif">Contact</h3>
            <p class="text-gray-600 mb-4">
              Phone: (555) 123-4567<br>
              Email: hello@hearthstone.cafe
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-amber-600 transition-colors">
                <Facebook class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-gray-400 hover:text-amber-600 transition-colors">
                <Instagram class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
