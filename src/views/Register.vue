<script setup>
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from '../firebase.js';
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMsg = ref("");
const successMsg = ref("");
const isLoading = ref(false);
const router = useRouter();

const register = () => {
  errorMsg.value = "";
  successMsg.value = "";

  // Validaciones
  if (!email.value || !password.value || !confirmPassword.value) {
    errorMsg.value = "Por favor completa todos los campos";
    return;
  }

  if (password.value !== confirmPassword.value) {
    errorMsg.value = "Las contraseñas no coinciden";
    return;
  }

  if (password.value.length < 6) {
    errorMsg.value = "La contraseña debe tener al menos 6 caracteres";
    return;
  }

  isLoading.value = true;

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      console.log(data.user);
      successMsg.value = "¡Cuenta creada exitosamente!";

      setTimeout(() => {
        router.push('/feed');
      }, 1500);
    })
    .catch((error) => {
      console.log(error.code);

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMsg.value = "Este correo ya está registrado";
          break;
        case "auth/invalid-email":
          errorMsg.value = "Correo electrónico inválido";
          break;
        case "auth/weak-password":
          errorMsg.value = "La contraseña es muy débil";
          break;
        default:
          errorMsg.value = "Error al crear la cuenta. Intenta nuevamente.";
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
      errorMsg.value = "Error al iniciar sesión con Google";
      console.log(error);
    });
};
</script>

<template>
  <div class="register-container">
    <div class="register-card">
      <div class="card-header">
        <div class="header-emoji">🍦</div>
        <h1 class="card-title">Crear Cuenta</h1>
        <p class="card-subtitle">Únete a nuestra heladería</p>
      </div>

      <form @submit.prevent="register" class="register-form">
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
            placeholder="Mínimo 6 caracteres"
            v-model="password"
            class="form-input"
            :disabled="isLoading"
          />
        </div>

        <!-- Confirm Password Field -->
        <div class="form-group">
          <label for="confirmPassword" class="form-label">
            <span class="label-icon">🔐</span>
            Confirmar Contraseña
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Repite tu contraseña"
            v-model="confirmPassword"
            class="form-input"
            :disabled="isLoading"
          />
        </div>

        <!-- Error Message -->
        <div v-if="errorMsg" class="alert alert-error">
          <span class="alert-icon">⚠️</span>
          {{ errorMsg }}
        </div>

        <!-- Success Message -->
        <div v-if="successMsg" class="alert alert-success">
          <span class="alert-icon">✅</span>
          {{ successMsg }}
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Crear Cuenta</span>
          <span v-else class="loading-spinner">⏳ Creando cuenta...</span>
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
          Registrarse con Google
        </button>

        <!-- Sign In Link -->
        <p class="footer-text">
          ¿Ya tienes cuenta?
          <router-link to="/sign-in" class="link">Inicia Sesión</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
}

.register-card {
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

.register-form {
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
  .register-container {
    padding: 1rem;
  }

  .register-card {
    padding: 2rem 1.5rem;
  }

  .card-title {
    font-size: 1.75rem;
  }
}
</style>