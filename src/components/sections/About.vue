<template>
  <section class="bg-navy py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
        <!-- Visual -->
        <div class="glass p-8 rounded-2xl h-80 flex items-center justify-center bg-gradient-to-br from-electric-blue/10 to-cyan/10">
          <div class="text-center">
            <div class="text-6xl mb-4">🎯</div>
            <p class="text-gray-300">{{ t('about.approach') }}</p>
          </div>
        </div>

        <!-- Content -->
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gradient mb-6">
            {{ t('about.title') }}
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed mb-6">
            {{ t('about.text') }}
          </p>
          <p class="text-gray-400 text-base leading-relaxed">
            {{ t('about.approach') }}
          </p>
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
</script>