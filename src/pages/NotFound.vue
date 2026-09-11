<template>
  <div class="min-h-screen bg-gradient-navy flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-8xl font-bold text-electric-blue mb-4">404</h1>
      <p class="text-2xl text-cyan mb-8">{{ language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found' }}</p>
      <RouterLink to="/" class="bg-gradient-electric text-white px-8 py-3 rounded-lg hover:shadow-lg transition">
        {{ language === 'ar' ? 'العودة للرئيسية' : 'Back to Home' }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  language: String
})
</script>