import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Debug: verificar que las variables existan
console.log('Firebase Config Check:', {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? '✅ Exists' : '❌ Missing',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? '✅ Exists' : '❌ Missing',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? '✅ Exists' : '❌ Missing',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? '✅ Exists' : '❌ Missing',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? '✅ Exists' : '❌ Missing',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ? '✅ Exists' : '❌ Missing',
});

// Configuración de Firebase usando variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Verificar que todas las variables estén definidas
const hasAllVars = Object.values(firebaseConfig).every(val => val !== undefined);

if (!hasAllVars) {
  console.error('❌ Missing Firebase environment variables!');
  console.error('Config:', firebaseConfig);
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth para uso en componentes
export const auth = getAuth(app);

export default app;
