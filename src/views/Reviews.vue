<script setup>
import { Star, CheckCircle2, Quote } from 'lucide-vue-next'

const stats = {
  rating: 4.8,
  total: 324,
  breakdown: [
    { stars: 5, count: 253, percentage: 78 },
    { stars: 4, count: 48, percentage: 15 },
    { stars: 3, count: 15, percentage: 5 },
    { stars: 2, count: 5, percentage: 1 },
    { stars: 1, count: 3, percentage: 1 },
  ]
}

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    initials: 'SJ',
    platform: 'Google Reviews',
    rating: 5,
    content: 'The Hearthstone is my go-to spot! The food is incredible, the staff is friendly, and the atmosphere is so cozy. I especially love their Sunrise Avocado Toast and the Lavender Latte is to die for! Every time I bring friends here, they\'re amazed. The attention to detail in both the presentation and flavors is exceptional.',
    date: '2 weeks ago',
    featured: true,
    color: 'bg-amber-100 text-amber-700'
  },
  {
    id: 2,
    name: 'Michael Chen',
    initials: 'MC',
    platform: 'Yelp',
    rating: 5,
    content: 'Amazing brunch experience! We came for my wife\'s birthday and they made it so special. The server even brought out a complimentary dessert with a candle. The Pan-Seared Salmon was cooked perfectly and the outdoor patio is beautiful. Highly recommend for any occasion!',
    date: '3 weeks ago',
    featured: false,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 3,
    name: 'Emily Parker',
    initials: 'EP',
    platform: 'TripAdvisor',
    rating: 5,
    content: 'As a vegan, I\'m always nervous about dining out, but The Hearthstone exceeded all expectations! The Eggplant Parmesan is divine and the staff was incredibly knowledgeable about ingredients. The atmosphere is warm and inviting. A new favorite!',
    date: '1 month ago',
    featured: false,
    color: 'bg-rose-100 text-rose-700'
  },
  {
    id: 4,
    name: 'David Williams',
    initials: 'DW',
    platform: 'Google Reviews',
    rating: 4,
    content: 'Great coffee and breakfast options. The pour-over is exceptional - you can tell they really care about the craft. Only reason for 4 stars instead of 5 is that it gets quite busy on weekends, so book ahead! But the wait is worth it.',
    date: '1 month ago',
    featured: false,
    color: 'bg-green-100 text-green-700'
  }
]
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <header class="relative py-24 bg-gray-900 text-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" 
          alt="Reviews background" 
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4">
        <span class="text-amber-400 font-semibold uppercase tracking-widest text-sm">Testimonials</span>
        <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mt-4 mb-6">What Our Guests Say</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">Real reviews from our community</p>
      </div>
    </header>

    <!-- Summary Section -->
    <section class="py-24 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-50 rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <!-- Overall Rating -->
            <div class="text-center lg:border-r border-gray-200 lg:pr-16">
              <div class="text-7xl font-bold font-serif text-gray-900 mb-4">{{ stats.rating }}</div>
              <div class="flex justify-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
              <p class="text-gray-500 font-medium">Based on {{ stats.total }} reviews</p>
            </div>

            <!-- Breakdown -->
            <div class="space-y-4">
              <div v-for="row in stats.breakdown" :key="row.stars" class="flex items-center gap-4 text-sm font-medium text-gray-600">
                <span class="w-12 whitespace-nowrap">{{ row.stars }} stars</span>
                <div class="flex-grow h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-amber-500 rounded-full transition-all duration-1000" :style="{ width: row.percentage + '%' }"></div>
                </div>
                <span class="w-10 text-right">{{ row.count }}</span>
              </div>
            </div>

            <!-- Platforms -->
            <div class="text-center lg:pl-16 lg:border-l border-gray-200 space-y-8">
              <h3 class="text-xl font-bold font-serif text-gray-900">Reviewed On</h3>
              <div class="flex flex-wrap justify-center gap-4">
                <div class="px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
                  <span class="w-6 h-6 bg-blue-600 text-white rounded-md text-xs flex items-center justify-center font-bold">G</span>
                  <span class="text-sm font-bold">Google</span>
                </div>
                <div class="px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
                  <span class="w-6 h-6 bg-red-600 text-white rounded-md text-xs flex items-center justify-center font-bold">Y</span>
                  <span class="text-sm font-bold">Yelp</span>
                </div>
                <div class="px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
                  <span class="w-6 h-6 bg-green-600 text-white rounded-md text-xs flex items-center justify-center font-bold">T</span>
                  <span class="text-sm font-bold">TripAdvisor</span>
                </div>
              </div>
              <button class="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-16">
          <span class="text-amber-600 font-semibold uppercase tracking-widest text-xs">Featured</span>
          <h2 class="text-3xl font-bold font-serif text-gray-900 mt-2">Recent Reviews</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="review in reviews" 
            :key="review.id"
            :class="['p-8 rounded-[2rem] border transition-all hover:shadow-xl', 
              review.featured ? 'bg-amber-50/50 border-amber-200 md:col-span-2' : 'bg-white border-gray-100']"
          >
            <div class="flex justify-between items-start mb-6">
              <div class="flex items-center gap-4">
                <div :class="['w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-sm', review.color]">
                  {{ review.initials }}
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">{{ review.name }}</h4>
                  <span class="text-xs font-medium text-gray-500 uppercase tracking-wider">{{ review.platform }}</span>
                </div>
              </div>
              <div class="flex gap-1 text-amber-500">
                <Star v-for="i in 5" :key="i" :class="['w-5 h-5', i <= review.rating ? 'fill-current' : 'text-gray-200']" />
              </div>
            </div>

            <div class="relative mb-8">
              <Quote class="w-10 h-10 text-amber-200 absolute -top-4 -left-4 -z-10" />
              <p :class="['text-gray-700 leading-relaxed italic', review.featured ? 'text-lg md:text-xl' : 'text-base']">
                "{{ review.content }}"
              </p>
            </div>

            <div class="flex justify-between items-center pt-6 border-t border-gray-100">
              <span class="text-sm text-gray-400">{{ review.date }}</span>
              <span class="flex items-center gap-1.5 text-xs font-bold text-green-600 uppercase tracking-widest">
                <CheckCircle2 class="w-4 h-4" /> Verified Visit
              </span>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center">
          <button class="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
