<script setup>
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from '../firebase.js';
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref("");
const successMsg = ref("");
const isLoading = ref(false);
const router = useRouter();

const signIn = () => {
  errMsg.value = "";
  successMsg.value = "";

  // Validaciones
  if (!email.value || !password.value) {
    errMsg.value = "Por favor completa todos los campos";
    return;
  }

  isLoading.value = true;

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully signed in!");
      console.log(data.user);
      successMsg.value = "¡Inicio de sesión exitoso!";

      setTimeout(() => {
        router.push('/feed');
      }, 1000);
    })
    .catch((error) => {
      console.log(error.code);

      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Correo electrónico inválido";
          break;
        case "auth/user-not-found":
          errMsg.value = "No existe una cuenta con este correo";
          break;
        case "auth/wrong-password":
          errMsg.value = "Contraseña incorrecta";
          break;
        case "auth/invalid-credential":
          errMsg.value = "Credenciales inválidas. Verifica tu correo y contraseña";
          break;
        case "auth/too-many-requests":
          errMsg.value = "Demasiados intentos. Intenta más tarde";
          break;
        default:
          errMsg.value = "Error al iniciar sesión. Verifica tus credenciales";
          break;
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
    })
    .catch((error) => {
      errMsg.value = "Error al iniciar sesión con Google";
      console.log(error);
    });
};
</script>

<template>
  <div class="signin-container">
    <div class="signin-card">
      <div class="card-header">
        <div class="header-emoji">🍨</div>
        <h1 class="card-title">Iniciar Sesión</h1>
        <p class="card-subtitle">¡Bienvenido de vuelta!</p>
      </div>

      <form @submit.prevent="signIn" class="signin-form">
        <!-- Email Field -->
        <div class="form-group">
          <label for="email" class="form-label">
            <span class="label-icon">📧</span>
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            v-model="email"
            class="form-input"
            :disabled="isLoading"
            autocomplete="email"
          />
        </div>

        <!-- Password Field -->
        <div class="form-group">
          <label for="password" class="form-label">
            <span class="label-icon">🔒</span>
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Tu contraseña"
            v-model="password"
            class="form-input"
            :disabled="isLoading"
            autocomplete="current-password"
          />
        </div>

        <!-- Error Message -->
        <div v-if="errMsg" class="alert alert-error">
          <span class="alert-icon">⚠️</span>
          {{ errMsg }}
        </div>

        <!-- Success Message -->
        <div v-if="successMsg" class="alert alert-success">
          <span class="alert-icon">✅</span>
          {{ successMsg }}
        </div>

        <!-- Forgot Password Link -->
        <div class="forgot-password">
          <a href="#" class="link-small">¿Olvidaste tu contraseña?</a>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Iniciar Sesión</span>
          <span v-else class="loading-spinner">⏳ Iniciando sesión...</span>
        </button>

        <!-- Divider -->
        <div class="divider">
          <span>o</span>
        </div>

        <!-- Google Sign In -->
        <button
          type="button"
          @click="signInWithGoogle"
          class="btn btn-google"
          :disabled="isLoading"
        >
          <span class="btn-icon">🔍</span>
          Iniciar con Google
        </button>

        <!-- Register Link -->
        <p class="footer-text">
          ¿No tienes cuenta?
          <router-link to="/register" class="link">Regístrate aquí</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.signin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
}

.signin-card {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.25);
}

.card-header {
  text-align: center;
  margin-bottom: 2rem;
}

.header-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.card-subtitle {
  background: linear-gradient(135deg, #00d4ff 0%, #ff85e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.1rem;
  font-weight: 600;
}

.signin-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
}

.label-icon {
  font-size: 1.2rem;
}

.form-input {
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f9f9f9;
}

.form-input:focus {
  outline: none;
  border-color: #00d4ff;
  background: white;
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.alert {
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.alert-error {
  background: #fee;
  color: #c33;
  border: 2px solid #fcc;
}

.alert-success {
  background: #e0f9ff;
  color: #00a8ff;
  border: 2px solid #a8edea;
}

.alert-icon {
  font-size: 1.2rem;
}

.forgot-password {
  text-align: right;
  margin-top: -0.5rem;
}

.link-small {
  color: #00d4ff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.link-small:hover {
  text-decoration: underline;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #00d4ff 0%, #00a8ff 100%);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 212, 255, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 212, 255, 0.4);
}

.btn-google {
  background: white;
  color: #2c3e50;
  border: 2px solid #e0e0e0;
}

.btn-google:hover:not(:disabled) {
  background: #f9f9f9;
  border-color: #00d4ff;
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.2rem;
}

.loading-spinner {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.divider {
  text-align: center;
  position: relative;
  margin: 0.5rem 0;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background: #e0e0e0;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background: white;
  padding: 0 1rem;
  color: #999;
}

.footer-text {
  text-align: center;
  color: #666;
  font-size: 0.95rem;
}

.link {
  color: #00d4ff;
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .signin-container {
    padding: 1rem;
  }

  .signin-card {
    padding: 2rem 1.5rem;
  }

  .card-title {
    font-size: 1.75rem;
  }
}
</style>