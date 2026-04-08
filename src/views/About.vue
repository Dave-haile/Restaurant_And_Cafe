<script setup>
import { Heart, Users, Leaf, Star, ArrowRight } from 'lucide-vue-next'

const values = [
  {
    title: 'Sustainability',
    description: 'We source ingredients from local farms within 50 miles, minimizing our carbon footprint while supporting our regional agricultural community.',
    icon: '🌿',
    color: 'bg-green-100 text-green-700'
  },
  {
    title: 'Community',
    description: 'The Hearthstone is more than a restaurant—it\'s a gathering place. We host monthly community events and sponsor local initiatives.',
    icon: '🤝',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    title: 'Quality',
    description: 'We never compromise on quality. From hand-selected coffee beans to locally raised meats, every ingredient is chosen with care.',
    icon: '⭐',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    title: 'Hospitality',
    description: 'Every guest is treated like family. We believe genuine warmth and attentive service are as important as the food on your plate.',
    icon: '💚',
    color: 'bg-rose-100 text-rose-700'
  }
]

const team = [
  {
    name: 'Elena Martinez',
    role: 'Founder & Executive Chef',
    description: 'With over 15 years of culinary experience, Elena brings her passion for sustainable, farm-to-table cuisine to every dish.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    name: 'Marcus Chen',
    role: 'Head Barista',
    description: 'A coffee enthusiast who sources our beans from small-batch roasters and trains our team in the art of perfect extraction.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    name: 'Sarah Johnson',
    role: 'General Manager',
    description: 'With a background in hospitality management, Sarah ensures every guest experience exceeds expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    name: 'James Rodriguez',
    role: 'Pastry Chef',
    description: 'James creates our decadent desserts daily, bringing classical French techniques together with local ingredients.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500'
  }
]

const stats = [
  { label: 'Years of Service', value: '6' },
  { label: 'Local Farm Partners', value: '50+' },
  { label: 'Happy Customers', value: '20k+' },
  { label: 'Amazing Team Members', value: '15' }
]
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <header class="relative py-32 bg-gray-900 text-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" 
          alt="About background" 
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4">
        <span class="text-amber-400 font-semibold uppercase tracking-widest text-sm">Our Story</span>
        <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mt-4 mb-6">About The Hearthstone</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">Where passion meets plate</p>
      </div>
    </header>

    <!-- Our Story Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <span class="text-amber-600 font-semibold uppercase tracking-widest text-sm">The Beginning</span>
            <h2 class="text-3xl md:text-4xl font-bold font-serif text-gray-900 leading-tight">A Dream Realized</h2>
            <p class="text-xl text-gray-900 font-medium leading-relaxed italic border-l-4 border-amber-600 pl-6 py-2">
              The Hearthstone began with a simple dream: to create a place where people could connect over delicious food and good company.
            </p>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>Founded in 2018 by Chef Elena Martinez, The Hearthstone was born from a lifelong passion for bringing people together through exceptional cuisine. Elena understood that food is more than sustenance—it's a catalyst for conversation and community.</p>
              <p>After years of culinary training in Europe, Elena returned with a vision: to create a warm, welcoming space where neighbors become friends and every visit feels like coming home.</p>
              <p>We're proud to be a part of the downtown district and committed to building lasting relationships with our customers.</p>
            </div>
          </div>
          <div class="relative">
            <div class="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80" alt="Chef working" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-10 -left-10 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-white hidden md:block">
              <img src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80" alt="Restaurant interior" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-amber-600 font-semibold uppercase tracking-widest text-sm">What We Stand For</span>
          <h2 class="text-3xl md:text-4xl font-bold font-serif text-gray-900 mt-2">Our Values</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title" class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm', value.color]">
              {{ value.icon }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-serif">{{ value.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-amber-600 font-semibold uppercase tracking-widest text-sm">The People</span>
          <h2 class="text-3xl md:text-4xl font-bold font-serif text-gray-900 mt-2">Meet Our Team</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in team" :key="member.name" class="group">
            <div class="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
              <img :src="member.image" :alt="member.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p class="text-white text-sm italic">{{ member.description }}</p>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 font-serif">{{ member.name }}</h3>
            <p class="text-amber-700 font-medium text-sm">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-amber-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl md:text-5xl font-bold font-serif mb-2">{{ stat.value }}</div>
            <div class="text-amber-100 uppercase tracking-widest text-xs font-semibold">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gray-900 -z-10"></div>
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold font-serif text-white mb-6">Join Our Story</h2>
        <p class="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">We'd love to welcome you to The Hearthstone and share our passion with you.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/reservations" class="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-all">
            Make a Reservation
          </router-link>
          <router-link to="/contact" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-semibold transition-all backdrop-blur-sm">
            Contact Us
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
