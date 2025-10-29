import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// Importar Firebase para inicializarlo
import './firebase'

const app = createApp(App)
app.use(router)
app.mount('#app')