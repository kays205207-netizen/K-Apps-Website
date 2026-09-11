<template>
  <div class="min-h-screen bg-gradient-navy py-8">
    <div v-if="!isAuthenticated" class="max-w-md mx-auto mt-20">
      <div class="glass p-8 rounded-2xl">
        <h2 class="text-2xl font-bold text-center mb-6 text-gradient">{{ t('login.title') }}</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-sm mb-2">{{ t('login.username') }}</label>
            <input v-model="credentials.username" type="text" class="w-full bg-navy/50 border border-electric-blue/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-electric-blue" />
          </div>
          <div class="mb-6">
            <label class="block text-sm mb-2">{{ t('login.password') }}</label>
            <input v-model="credentials.password" type="password" class="w-full bg-navy/50 border border-electric-blue/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-electric-blue" />
          </div>
          <button type="submit" class="w-full bg-gradient-electric text-white font-bold py-2 rounded-lg hover:shadow-lg transition">
            {{ t('login.submit') }}
          </button>
        </form>
      </div>
    </div>
    <div v-else class="max-w-6xl mx-auto">
      <AdminDashboard :language="language" @logout="logout" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import AdminDashboard from '../components/admin/Dashboard.vue'
import { content } from '../i18n/content'

const props = defineProps({
  language: String
})

const isAuthenticated = ref(!!localStorage.getItem('admin_token'))
const credentials = ref({ username: '', password: '' })

const t = (key) => {
  const keys = key.split('.')
  let value = content[props.language]
  keys.forEach(k => value = value[k])
  return value
}

const login = async () => {
  try {
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials.value)
    })
    const data = await response.json()
    if (data.token) {
      localStorage.setItem('admin_token', data.token)
      isAuthenticated.value = true
      credentials.value = { username: '', password: '' }
    }
  } catch (error) {
    console.error('Login error:', error)
  }
}

const logout = () => {
  localStorage.removeItem('admin_token')
  isAuthenticated.value = false
}
</script>