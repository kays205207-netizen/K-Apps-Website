import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/globals.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

// Store language preference
if (localStorage.getItem('language')) {
  document.documentElement.lang = localStorage.getItem('language')
  document.documentElement.dir = localStorage.getItem('language') === 'en' ? 'ltr' : 'rtl'
}