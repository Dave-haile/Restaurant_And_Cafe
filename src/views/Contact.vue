<script setup>
import { ref } from 'vue'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, MessageSquare, HelpCircle } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitted = ref(false)

const submitForm = () => {
  console.log('Contact form submitted:', form.value)
  isSubmitted.value = true
}

const faqs = [
  {
    question: 'Do you accommodate dietary restrictions?',
    answer: 'Absolutely! We offer vegetarian, vegan, and gluten-free options. Please inform your server of any allergies or dietary needs, and our kitchen will take every precaution to accommodate you safely.',
    icon: '🍽️'
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, we have free parking available for guests directly behind the building. There is also metered street parking on Main Street.',
    icon: '🚗'
  },
  {
    question: 'Do you offer catering services?',
    answer: 'We do! We offer a variety of catering packages for office lunches, private parties, and community events. Please contact our events coordinator for details.',
    icon: '🍱'
  },
  {
    question: 'Are you dog-friendly?',
    answer: 'We welcome well-behaved dogs on our outdoor patio area! We even have special water bowls and treats for our furry friends.',
    icon: '🐕'
  }
]
</script>

<template>
  <div class="bg-white">
    <!-- Page Header -->
    <header class="relative py-24 bg-gray-900 text-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80" 
          alt="Contact background" 
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4">
        <span class="text-amber-400 font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
        <h1 class="text-4xl md:text-6xl font-bold font-serif text-white mt-4 mb-6">Contact Us</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">We'd love to hear from you</p>
      </div>
    </header>

    <!-- Contact Content -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <div class="space-y-8">
                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 shrink-0">
                    <MapPin class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      123 Main Street<br>
                      Downtown District<br>
                      Your City, ST 12345
                    </p>
                    <a href="#" class="text-amber-700 text-xs font-bold uppercase tracking-widest mt-2 inline-block hover:underline">Get Directions</a>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 shrink-0">
                    <Phone class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">Call Us</h3>
                    <p class="text-gray-600 text-sm">Reservations: (555) 123-4567</p>
                    <p class="text-gray-600 text-sm">Events: (555) 123-4568</p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 shrink-0">
                    <Mail class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">Email Us</h3>
                    <p class="text-gray-600 text-sm">hello@hearthstone.cafe</p>
                    <p class="text-gray-600 text-sm">events@hearthstone.cafe</p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 shrink-0">
                    <Clock class="w-6 h-6" />
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">Hours</h3>
                    <div class="text-gray-600 text-sm space-y-1">
                      <p><strong>Mon – Fri:</strong> 7:00 AM – 10:00 PM</p>
                      <p><strong>Sat:</strong> 8:00 AM – 11:00 PM</p>
                      <p><strong>Sun:</strong> 8:00 AM – 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-12 pt-8 border-t border-gray-200">
                <h3 class="font-bold text-gray-900 mb-6">Follow Us</h3>
                <div class="flex gap-4">
                  <a href="#" class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-amber-600 transition-colors">
                    <Facebook class="w-6 h-6" />
                  </a>
                  <a href="#" class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-amber-600 transition-colors">
                    <Instagram class="w-6 h-6" />
                  </a>
                  <a href="#" class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-amber-600 transition-colors">
                    <Twitter class="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Form & Map -->
          <div class="lg:col-span-2 space-y-12">
            <div v-if="!isSubmitted" class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100">
              <div class="mb-10">
                <span class="text-amber-600 font-semibold uppercase tracking-widest text-xs">Send a Message</span>
                <h2 class="text-3xl font-bold font-serif text-gray-900 mt-2 mb-4">Get In Touch</h2>
                <p class="text-gray-600">Have a question, feedback, or special request? We'd love to hear from you.</p>
              </div>

              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-gray-700">Your Name *</label>
                    <input v-model="form.name" type="text" placeholder="John Smith" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-semibold text-gray-700">Email Address *</label>
                    <input v-model="form.email" type="email" placeholder="john@example.com" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all" />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-semibold text-gray-700">Subject *</label>
                  <select v-model="form.subject" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all">
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Reservation Question</option>
                    <option value="event">Private Event</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-semibold text-gray-700">Message *</label>
                  <textarea v-model="form.message" rows="5" placeholder="How can we help you?" required class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" class="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-amber-600/20 transition-all">
                  Send Message
                </button>
              </form>
            </div>

            <div v-else class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-green-100 text-center animate-in zoom-in duration-500">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-4xl mx-auto mb-8">
                ✓
              </div>
              <h3 class="text-3xl font-bold font-serif text-gray-900 mb-4">Message Sent!</h3>
              <p class="text-gray-600 max-w-md mx-auto mb-8">
                Thank you for reaching out, {{ form.name }}. We'll get back to you within 24 hours.
              </p>
              <button @click="isSubmitted = false" class="text-amber-700 font-bold hover:underline">Send another message</button>
            </div>

            <!-- Map Placeholder -->
            <div class="bg-gray-100 rounded-[2.5rem] overflow-hidden h-[400px] relative group">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTAuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy">
              </iframe>
              <div class="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p class="text-xs text-gray-600 flex items-center gap-2">
                  <MapPin class="w-4 h-4 text-amber-600" /> Free parking available behind the building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-amber-600 font-semibold uppercase tracking-widest text-sm">Common Questions</span>
          <h2 class="text-3xl md:text-4xl font-bold font-serif text-gray-900 mt-2">Frequently Asked Questions</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="faq in faqs" :key="faq.question" class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div class="text-3xl mb-4">{{ faq.icon }}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 font-serif">{{ faq.question }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
