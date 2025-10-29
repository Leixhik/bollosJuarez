import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ BIEN - Usando variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Inicializar Firebase



initializeApp(firebaseConfig);

const app = createApp(App)
app.use(router)
app.mount('#app')


export default app;
export const auth = getAuth(app);