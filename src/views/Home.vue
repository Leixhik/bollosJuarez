<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToFeed = () => {
  router.push('/feed');
};

const navigateToRegister = () => {
  router.push('/register');
};
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="emoji-large">🍦</span>
          Bienvenido a Heladería Juárez
        </h1>
        <p class="hero-subtitle">
          Los helados más cremosos y refrescantes de la ciudad
        </p>
        <p class="hero-description">
          Disfruta de nuestros helados artesanales, elaborados con ingredientes naturales y recetas únicas.
          Una tradición familiar que lleva más de 30 años endulzando momentos especiales.
        </p>
        <div class="cta-buttons">
          <button @click="navigateToFeed" class="btn btn-primary">
            <span>🍨</span> Ver Productos
          </button>
          <button @click="navigateToRegister" class="btn btn-secondary">
            <span>📝</span> Crear Cuenta
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2 class="section-title">¿Por qué elegirnos?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🥛</div>
          <h3>Ingredientes Naturales</h3>
          <p>Utilizamos solo ingredientes frescos y naturales, sin conservadores artificiales.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌈</div>
          <h3>Sabores Únicos</h3>
          <p>Más de 50 sabores diferentes, desde clásicos hasta creaciones innovadoras.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">❄️</div>
          <h3>Siempre Fresco</h3>
          <p>Elaboramos nuestros helados diariamente para garantizar la mejor calidad y sabor.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🚚</div>
          <h3>Entrega a Domicilio</h3>
          <p>Disfruta tus helados favoritos desde la comodidad de tu hogar con empaque térmico.</p>
        </div>
      </div>
    </section>

    <!-- Products Preview -->
    <section class="products-preview">
      <h2 class="section-title">Nuestras Especialidades</h2>
      <div class="products-grid">
        <div class="product-preview-card">
          <div class="product-emoji">🍦</div>
          <h4>Helados Clásicos</h4>
        </div>
        <div class="product-preview-card">
          <div class="product-emoji">🍨</div>
          <h4>Sundaes</h4>
        </div>
        <div class="product-preview-card">
          <div class="product-emoji">🧁</div>
          <h4>Paletas</h4>
        </div>
        <div class="product-preview-card">
          <div class="product-emoji">🍰</div>
          <h4>Pasteles Helados</h4>
        </div>
      </div>
      <button @click="navigateToFeed" class="btn btn-primary" style="margin-top: 2rem;">
        Ver Catálogo Completo
      </button>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
}

.hero {
  background: white;
  border-radius: 16px;
  padding: 4rem 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.emoji-large {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-title {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #00d4ff 0%, #ff85e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: linear-gradient(135deg, #00d4ff 0%, #00a8ff 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 212, 255, 0.4);
}

.btn-secondary {
  background: white;
  color: #00d4ff;
  border: 2px solid #00d4ff;
}

.btn-secondary:hover {
  background: linear-gradient(135deg, #00d4ff 0%, #ff85e1 100%);
  color: white;
  border-color: transparent;
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 212, 255, 0.3);
}

.features {
  margin-bottom: 3rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #666;
  line-height: 1.5;
}

.products-preview {
  background: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
}

.products-preview .section-title {
  color: #2c3e50;
  text-shadow: none;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.product-preview-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 2rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-preview-card:hover {
  transform: scale(1.05) rotate(-2deg);
  box-shadow: 0 8px 15px rgba(0, 212, 255, 0.4);
}

.product-emoji {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.product-preview-card h4 {
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .section-title {
    font-size: 2rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>