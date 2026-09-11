<template>
  <footer class="bg-navy border-t border-cyan/10 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 bg-gradient-electric rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">K</span>
            </div>
            <span class="font-bold text-lg text-white">K-Apps</span>
          </div>
          <p class="text-gray-400 text-sm">{{ t('footer.tagline') }}</p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="font-bold text-white mb-4">{{ t('footer.links') }}</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" class="hover:text-cyan transition">{{ t('nav.home') }}</a></li>
            <li><a href="#services" class="hover:text-cyan transition">{{ t('nav.services') }}</a></li>
            <li><a href="#portfolio" class="hover:text-cyan transition">{{ t('nav.portfolio') }}</a></li>
            <li><a href="#faq" class="hover:text-cyan transition">{{ t('nav.faq') }}</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="font-bold text-white mb-4">{{ t('footer.services') }}</h3>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li>{{ t('services.mobile.title') }}</li>
            <li>{{ t('services.web.title') }}</li>
            <li>{{ t('services.shop.title') }}</li>
            <li>{{ t('services.management.title') }}</li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-bold text-white mb-4">{{ t('nav.contact') }}</h3>
          <div class="space-y-2 text-gray-400 text-sm">
            <p>
              <a href="https://wa.me/201XXXXXXXXX" target="_blank" class="hover:text-cyan transition">
                WhatsApp
              </a>
            </p>
            <p>
              <a href="https://facebook.com/kappss" target="_blank" class="hover:text-cyan transition">
                Facebook
              </a>
            </p>
            <p>
              <a href="mailto:info@k-apps.com" class="hover:text-cyan transition">
                Email
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-cyan/10 pt-8">
        <p class="text-center text-gray-500 text-sm">{{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'
import { content } from '../i18n/content'

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