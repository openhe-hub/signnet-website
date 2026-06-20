import { createApp } from 'vue'
import App from './App.vue'
import { reveal } from './composables/useReveal.js'
import './style.css'

createApp(App).directive('reveal', reveal).mount('#app')
