import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './index.css';

import { apolloClient } from "@/apollo-config";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(apolloClient)

app.mount('#app')
