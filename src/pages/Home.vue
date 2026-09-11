<template>
  <main class="w-full">
    <Hero :language="language" />
    <About :language="language" />
    <Services :language="language" />
    <WhyUs :language="language" />
    <HowWorks :language="language" />
    <Solutions :language="language" />
    <Portfolio :language="language" />
    <CTA :language="language" />
    <FAQ :language="language" />
    <Contact :language="language" />
  </main>
</template>

<script setup>
import { defineProps } from 'vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Services from '../components/sections/Services.vue'
import WhyUs from '../components/sections/WhyUs.vue'
import HowWorks from '../components/sections/HowWorks.vue'
import Solutions from '../components/sections/Solutions.vue'
import Portfolio from '../components/sections/Portfolio.vue'
import CTA from '../components/sections/CTA.vue'
import FAQ from '../components/sections/FAQ.vue'
import Contact from '../components/sections/Contact.vue'

defineProps({
  language: String
})
</script>