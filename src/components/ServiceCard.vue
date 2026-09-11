<template>
  <div class="glass p-6 rounded-2xl h-full flex flex-col hover:border-electric-blue/50 transition group cursor-pointer">
    <div class="text-4xl mb-4 group-hover:scale-110 transition">{{ icon }}</div>
    <h3 class="text-xl font-bold text-white mb-3">{{ title }}</h3>
    <p class="text-gray-400 text-sm flex-grow">{{ desc }}</p>
    <div class="mt-4 text-cyan text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
      {{ language === 'ar' ? 'اعرف المزيد →' : 'Learn More →' }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: String,
  title: String,
  desc: String,
  language: {
    type: String,
    default: 'ar'
  }
})
</script>