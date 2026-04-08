<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LoadingOverlay from './components/LoadingOverlay.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <LoadingOverlay />
    <Navbar />
    <main class="flex-grow">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <template v-if="route.meta.keepAlive">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </template>
          <component v-else :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
