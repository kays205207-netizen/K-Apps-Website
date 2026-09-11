<template>
  <section id="home" class="min-h-screen bg-gradient-navy pt-20 pb-12 flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
        <!-- Content -->
        <div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6 animate-slide-up">
            {{ t('hero.title') }} 🚀
          </h1>
          <p class="text-gray-300 text-lg mb-8 leading-relaxed animate-slide-up" style="animation-delay: 0.2s">
            {{ t('hero.subtitle') }}
          </p>
          
          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-4 mb-8 animate-slide-up" style="animation-delay: 0.4s">
            <div class="glass p-4 rounded-lg text-center">
              <div class="text-2xl text-cyan font-bold">📱</div>
              <p class="text-sm text-gray-300 mt-2">{{ t('hero.mobile') }}</p>
            </div>
            <div class="glass p-4 rounded-lg text-center">
              <div class="text-2xl text-cyan font-bold">🌐</div>
              <p class="text-sm text-gray-300 mt-2">{{ t('hero.web') }}</p>
            </div>
            <div class="glass p-4 rounded-lg text-center">
              <div class="text-2xl text-cyan font-bold">🛒</div>
              <p class="text-sm text-gray-300 mt-2">{{ t('hero.shop') }}</p>
            </div>
            <div class="glass p-4 rounded-lg text-center">
              <div class="text-2xl text-cyan font-bold">📊</div>
              <p class="text-sm text-gray-300 mt-2">{{ t('hero.admin') }}</p>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="animation-delay: 0.6s">
            <button
              @click="scrollToContact"
              class="bg-gradient-electric text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition hover:shadow-electric-blue/50"
            >
              {{ t('hero.ctaStart') }}
            </button>
            <button
              @click="openWhatsApp"
              class="border border-cyan text-cyan font-bold py-3 px-8 rounded-lg hover:bg-cyan/10 transition"
            >
              {{ t('hero.ctaTalk') }}
            </button>
          </div>
        </div>

        <!-- Mockup Visual -->
        <div class="hidden lg:flex justify-center items-center animate-float">
          <div class="relative w-full h-96">
            <!-- Laptop -->
            <div class="glass absolute inset-0 rounded-2xl p-4 flex items-center justify-center bg-gradient-to-br from-electric-blue/20 to-cyan/20 border-2 border-cyan/30">
              <div class="w-full h-full bg-navy rounded-lg flex items-center justify-center border border-electric-blue/50">
                <div class="space-y-4 text-center">
                  <div class="w-32 h-4 bg-gradient-electric rounded mx-auto"></div>
                  <div class="w-24 h-3 bg-electric-blue/50 rounded mx-auto"></div>
                  <div class="grid grid-cols-2 gap-2 mt-4">
                    <div class="w-12 h-12 bg-electric-blue/30 rounded"></div>
                    <div class="w-12 h-12 bg-electric-blue/30 rounded"></div>
                    <div class="w-12 h-12 bg-electric-blue/30 rounded"></div>
                    <div class="w-12 h-12 bg-electric-blue/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="glass absolute -bottom-4 -left-4 w-32 h-48 rounded-2xl p-2 border-4 border-cyan/40 bg-navy/90 flex items-center justify-center">
              <div class="w-full h-full bg-gradient-to-b from-electric-blue/40 to-navy rounded-xl flex items-center justify-center">
                <span class="text-xs text-cyan font-bold">App UI</span>
              </div>
            </div>

            <!-- Dashboard -->
            <div class="glass absolute -top-4 -right-4 w-32 h-28 rounded-lg p-2 border-2 border-electric-blue/40 bg-navy/90">
              <div class="space-y-1 text-xs">
                <div class="h-2 bg-electric-blue/50 rounded w-3/4"></div>
                <div class="h-1 bg-cyan/30 rounded"></div>
                <div class="h-1 bg-cyan/30 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import { content } from '../../i18n/content'

const props = defineProps({
  language: String
})

const t = (key) => {
  const keys = key.split('.')
  let value = content[props.language]
  keys.forEach(k => value = value[k])
  return value
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

const openWhatsApp = () => {
  const message = props.language === 'ar' ? 'مرحبا، أريد التحدث عن فكرة مشروع' : 'Hello, I want to discuss a project idea'
  window.open(`https://wa.me/201XXXXXXXXX?text=${encodeURIComponent(message)}`, '_blank')
}
</script>