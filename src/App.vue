<template>
  <div :lang="language" :dir="language === 'en' ? 'ltr' : 'rtl'" class="min-h-screen bg-gradient-navy">
    <Header :language="language" @change-language="changeLanguage" />
    <RouterView :language="language" />
    <Footer :language="language" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'

const language = ref(localStorage.getItem('language') || 'ar')

const changeLanguage = (lang) => {
  language.value = lang
  localStorage.setItem('language', lang)
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl'
}

onMounted(() => {
  document.documentElement.lang = language.value
  document.documentElement.dir = language.value === 'en' ? 'ltr' : 'rtl'
})
</script>

<style scoped>
</style>