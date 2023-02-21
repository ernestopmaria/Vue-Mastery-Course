import { createApp } from 'vue'
import { createPinia } from 'pinia'
import GStore from '@/store'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'

const app = createApp(App)
app.provide('GStore', GStore)
app.use(createPinia())
app.use(router)

app.mount('#app')
