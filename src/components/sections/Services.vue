<template>
  <section id="services" class="min-h-screen bg-gradient-navy py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in">
        <h2 class="text-4xl sm:text-5xl font-bold text-gradient mb-4">
          {{ t('services.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-electric mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
        <!-- Service Card -->
        <ServiceCard
          v-for="(service, key) in servicesData"
          :key="key"
          :icon="service.icon"
          :title="t(`services.${key}.title`)"
          :desc="t(`services.${key}.desc`)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import { content } from '../../i18n/content'
import ServiceCard from '../ServiceCard.vue'

const props = defineProps({
  language: String
})

const t = (key) => {
  const keys = key.split('.')
  let value = content[props.language]
  keys.forEach(k => value = value[k])
  return value
}

const servicesData = {
  mobile: { icon: '📱' },
  web: { icon: '🌐' },
  shop: { icon: '🛒' },
  management: { icon: '📊' },
  products: { icon: '📦' },
  clients: { icon: '👥' },
  maintenance: { icon: '🔧' }
}
</script>