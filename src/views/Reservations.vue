<script setup>
import { ref } from 'vue'
import { Calendar, Users, Smartphone, Clock, MapPin, Phone, Mail } from 'lucide-vue-next'

const form = ref({
  date: '',
  time: '',
  guests: '',
  seating: 'no-preference',
  name: '',
  phone: '',
  email: '',
  occasion: '',
  requests: '',
  newsletter: false
})

const isSubmitted = ref(false)

const submitForm = () => {
  // Simulate API call
  console.log('Reservation submitted:', form.value)
  isSubmitted.value = true
}

const timeOptions = [
  '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM'
]

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <header class="relative py-24 bg-gray-900 text-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550966841-3ee7adac1af8?auto=format&fit=crop&q=80" 
          alt="Reservations background" 
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4">
        <span class="text-amber-400 font-semibold uppercase tracking-widest text-sm">Book Your Table</span>
        <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mt-4 mb-6">Reservations</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">Secure your spot for a memorable dining experience</p>
      </div>
    </header>

    <!-- Info Cards -->
    <section class="py-12 bg-amber-50/50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
              <Clock class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900">Reservation Hours</h3>
              <p class="text-sm text-gray-600">7:00 AM – 9:00 PM daily</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
              <Users class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900">Party Size</h3>
              <p class="text-sm text-gray-600">Up to 8 guests online</p>
            </div>
          </div>
          <div class="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700">
              <Smartphone class="w-6 h-6" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900">Confirmation</h3>
              <p class="text-sm text-gray-600">Instant email & SMS</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reservation Form Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div class="lg:col-span-2">
            <div v-if="!isSubmitted" class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
              <div class="mb-10">
                <span class="text-amber-600 font-semibold uppercase tracking-widest text-xs">Online Booking</span>
                <h2 class="text-3xl font-bold font-serif text-gray-900 mt-2 mb-4">Make a Reservation</h2>
                <p class="text-gray-600">Complete the form below to book your table. We'll send a confirmation immediately.</p>
              </div>

              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-gray-700">Date *</label>
                    <input v-model="form.date" type="date" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-gray-700">Time *</label>
                    <select v-model="form.time" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all">
                      <option value="">Select a time</option>
                      <option v-for="time in timeOptions" :key="time" :value="time">{{ time }}</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-gray-700">Number of Guests *</label>
                    <select v-model="form.guests" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all">
                      <option value="">Select guests</option>
                      <option v-for="num in guestOptions" :key="num" :value="num">{{ num }} {{ num === 1 ? 'Guest' : 'Guests' }}</option>
                    </select>
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-gray-700">Seating Preference</label>
                    <select v-model="form.seating" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all">
                      <option value="no-preference">No Preference</option>
                      <option value="indoor">Indoor</option>
                      <option value="outdoor">Outdoor Patio</option>
                      <option value="bar">Bar Area</option>
                      <option value="quiet">Quiet Corner</option>
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-gray-700">Full Name *</label>
                    <input v-model="form.name" type="text" placeholder="John Smith" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input v-model="form.phone" type="tel" placeholder="(555) 123-4567" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-semibold text-gray-700">Email Address *</label>
                  <input v-model="form.email" type="email" placeholder="john@example.com" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-semibold text-gray-700">Special Occasion</label>
                  <select v-model="form.occasion" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all">
                    <option value="">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="date">Date Night</option>
                    <option value="business">Business Meeting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-semibold text-gray-700">Special Requests</label>
                  <textarea v-model="form.requests" rows="3" placeholder="Dietary restrictions, accessibility needs..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"></textarea>
                </div>

                <label class="flex items-center gap-3 cursor-pointer group">
                  <input v-model="form.newsletter" type="checkbox" class="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500 cursor-pointer" />
                  <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Subscribe to our newsletter for updates and special offers</span>
                </label>

                <button type="submit" class="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-amber-600/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                  Confirm Reservation
                </button>
              </form>
            </div>

            <!-- Success State -->
            <div v-else class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-green-100 text-center animate-in zoom-in duration-500">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-4xl mx-auto mb-8">
                ✓
              </div>
              <h3 class="text-3xl font-bold font-serif text-gray-900 mb-4">Reservation Confirmed!</h3>
              <p class="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for choosing The Hearthstone, {{ form.name }}. We've sent a confirmation to {{ form.email }}.
              </p>
              
              <div class="bg-gray-50 rounded-2xl p-6 mb-8 text-left space-y-3 max-w-sm mx-auto">
                <div class="flex justify-between text-sm"><span class="text-gray-500">Date:</span> <span class="font-bold">{{ form.date }}</span></div>
                <div class="flex justify-between text-sm"><span class="text-gray-500">Time:</span> <span class="font-bold">{{ form.time }}</span></div>
                <div class="flex justify-between text-sm"><span class="text-gray-500">Guests:</span> <span class="font-bold">{{ form.guests }}</span></div>
                <div class="flex justify-between text-sm"><span class="text-gray-500">Seating:</span> <span class="font-bold capitalize">{{ form.seating }}</span></div>
              </div>

              <router-link to="/" class="inline-block px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors">
                Return to Home
              </router-link>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <div class="bg-amber-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-amber-600/20">
              <h3 class="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
                <Phone class="w-6 h-6" /> Call to Reserve
              </h3>
              <p class="text-amber-100 mb-6 leading-relaxed">
                Prefer to book over the phone? Our team is available to assist you with special arrangements.
              </p>
              <a href="tel:5551234567" class="text-3xl font-bold hover:text-amber-200 transition-colors block mb-2">(555) 123-4567</a>
              <p class="text-sm text-amber-200">Available 7:00 AM – 9:00 PM</p>
            </div>

            <div class="bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-xl">
              <h3 class="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
                <Mail class="w-6 h-6" /> Large Parties
              </h3>
              <p class="text-gray-400 mb-6 leading-relaxed">
                Planning an event for more than 8 people? Contact our events coordinator for personalized service.
              </p>
              <a href="mailto:events@hearthstone.cafe" class="text-amber-500 font-bold hover:underline">events@hearthstone.cafe</a>
            </div>

            <div class="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg">
              <h3 class="text-xl font-bold font-serif text-gray-900 mb-6">Reservation Policy</h3>
              <ul class="space-y-4 text-sm text-gray-600">
                <li class="flex gap-3">
                  <span class="text-amber-600 font-bold">•</span>
                  <span>Tables are held for 15 minutes past the reservation time.</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-amber-600 font-bold">•</span>
                  <span>We require 24-hour notice for cancellations or changes.</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-amber-600 font-bold">•</span>
                  <span>Maximum seating time is 2 hours for parties of 4 or more.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
