<template>
  <header class="sticky top-0 z-50 bg-gradient-navy/95 backdrop-blur-xl border-b border-cyan/10 transition-all">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gradient-electric rounded-lg flex items-center justify-center">
          <span class="text-white font-bold">K</span>
        </div>
        <span class="font-bold text-xl text-white hidden sm:inline">K-Apps</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex gap-8 items-center">
        <a href="#home" class="text-gray-300 hover:text-cyan transition">{{ t('nav.home') }}</a>
        <a href="#services" class="text-gray-300 hover:text-cyan transition">{{ t('nav.services') }}</a>
        <a href="#why" class="text-gray-300 hover:text-cyan transition">{{ t('nav.why') }}</a>
        <a href="#how" class="text-gray-300 hover:text-cyan transition">{{ t('nav.howWorks') }}</a>
        <a href="#portfolio" class="text-gray-300 hover:text-cyan transition">{{ t('nav.portfolio') }}</a>
        <a href="#faq" class="text-gray-300 hover:text-cyan transition">{{ t('nav.faq') }}</a>
        <a href="#contact" class="text-gray-300 hover:text-cyan transition">{{ t('nav.contact') }}</a>
      </nav>

      <!-- Language & CTA -->
      <div class="flex items-center gap-4">
        <div class="flex gap-2 text-sm">
          <button
            @click="$emit('change-language', 'ar')"
            :class="language === 'ar' ? 'text-cyan font-bold' : 'text-gray-400 hover:text-cyan'"
            class="transition"
          >
            العربية
          </button>
          <span class="text-gray-500">|</span>
          <button
            @click="$emit('change-language', 'en')"
            :class="language === 'en' ? 'text-cyan font-bold' : 'text-gray-400 hover:text-cyan'"
            class="transition"
          >
            English
          </button>
        </div>

        <button
          @click="scrollToContact"
          class="hidden sm:block bg-gradient-electric text-white px-6 py-2 rounded-lg hover:shadow-lg transition hover:shadow-electric-blue/50"
        >
          {{ t('nav.startProject') }}
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden text-white p-2"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden bg-navy border-t border-cyan/10 py-4">
      <nav class="flex flex-col gap-4 px-4">
        <a href="#home" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan transition">{{ t('nav.home') }}</a>
        <a href="#services" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan transition">{{ t('nav.services') }}</a>
        <a href="#why" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan transition">{{ t('nav.why') }}</a>
        <a href="#how" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan transition">{{ t('nav.howWorks') }}</a>
        <a href="#portfolio" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan transition">{{ t('nav.portfolio') }}</a>
        <a href="#faq" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan transition">{{ t('nav.faq') }}</a>
        <a href="#contact" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-cyan transition">{{ t('nav.contact') }}</a>
        <button
          @click="scrollToContact; mobileMenuOpen = false"
          class="bg-gradient-electric text-white px-6 py-2 rounded-lg hover:shadow-lg transition mt-2 w-full"
        >
          {{ t('nav.startProject') }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { content } from '../i18n/content'

const props = defineProps({
  language: String
})

const emit = defineEmits(['change-language'])
const mobileMenuOpen = ref(false)

const t = (key) => {
  const keys = key.split('.')
  let value = content[props.language]
  keys.forEach(k => value = value[k])
  return value
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>