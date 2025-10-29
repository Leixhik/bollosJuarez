<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);
const userEmail = ref('');

let auth;
onMounted(() => {
  auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      userEmail.value = user.email;
    } else {
      isLoggedIn.value = false;
      userEmail.value = '';
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo">
          <span class="logo-icon">🍦</span>
          <span class="logo-text">Heladería Juárez</span>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">
            <span class="icon">🏠</span>
            <span>Inicio</span>
          </router-link>
          <router-link to="/feed" class="nav-link">
            <span class="icon">🍨</span>
            <span>Productos</span>
          </router-link>
          <router-link v-if="!isLoggedIn" to="/register" class="nav-link">
            <span class="icon">📝</span>
            <span>Registro</span>
          </router-link>
          <router-link v-if="!isLoggedIn" to="/sign-in" class="nav-link">
            <span class="icon">🔐</span>
            <span>Iniciar Sesión</span>
          </router-link>
          <div v-if="isLoggedIn" class="user-section">
            <span class="user-email">{{ userEmail }}</span>
            <button @click="handleSignOut" class="sign-out-btn">
              <span class="icon">🚪</span>
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>© 2025 Heladería Juárez - Refrescando tus días con sabor ❄️🍦</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #00d4ff;
}

.logo-icon {
  font-size: 2rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.logo-text {
  background: linear-gradient(135deg, #00d4ff 0%, #ff85e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link .icon {
  font-size: 1.2rem;
}

.nav-link:hover {
  background: linear-gradient(135deg, #00d4ff 0%, #ff85e1 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 212, 255, 0.4);
}

.nav-link.router-link-active {
  background: linear-gradient(135deg, #00d4ff 0%, #ff85e1 100%);
  color: white;
  box-shadow: 0 4px 8px rgba(0, 212, 255, 0.4);
}

.user-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  border-radius: 8px;
}

.user-email {
  color: #00d4ff;
  font-weight: 600;
  font-size: 0.9rem;
}

.sign-out-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff85e1 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sign-out-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 107, 107, 0.4);
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.footer {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  text-align: center;
  padding: 1.5rem;
  color: #666;
  font-size: 0.9rem;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    text-align: center;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }

  .nav-link {
    width: 100%;
    justify-content: center;
  }

  .user-section {
    flex-direction: column;
    width: 100%;
  }

  .main-content {
    padding: 1rem;
  }
}
</style>