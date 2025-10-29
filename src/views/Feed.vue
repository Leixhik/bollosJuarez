<script setup>
import { ref } from 'vue';

const products = ref([
  {
    id: 1,
    name: 'Helado de Vainilla',
    emoji: '🍦',
    price: 35,
    description: 'Cremoso helado de vainilla natural',
    category: 'Helados Clásicos'
  },
  {
    id: 2,
    name: 'Helado de Chocolate',
    emoji: '🍫',
    price: 35,
    description: 'Intenso sabor a chocolate belga',
    category: 'Helados Clásicos'
  },
  {
    id: 3,
    name: 'Helado de Fresa',
    emoji: '🍓',
    price: 40,
    description: 'Con fresas naturales y frescas',
    category: 'Helados Clásicos'
  },
  {
    id: 4,
    name: 'Sundae Especial',
    emoji: '🍨',
    price: 65,
    description: 'Helado con toppings y salsas',
    category: 'Sundaes'
  },
  {
    id: 5,
    name: 'Malteada de Oreo',
    emoji: '🥤',
    price: 55,
    description: 'Cremosa malteada con galletas Oreo',
    category: 'Bebidas'
  },
  {
    id: 6,
    name: 'Paleta de Limón',
    emoji: '🍋',
    price: 25,
    description: 'Refrescante paleta de agua',
    category: 'Paletas'
  },
  {
    id: 7,
    name: 'Helado de Mango',
    emoji: '🥭',
    price: 40,
    description: 'Con mangos tropicales maduros',
    category: 'Helados Especiales'
  },
  {
    id: 8,
    name: 'Pastel Helado',
    emoji: '🎂',
    price: 450,
    description: 'Pastel helado de 1kg, varios sabores',
    category: 'Pasteles'
  },
  {
    id: 9,
    name: 'Helado de Cookies & Cream',
    emoji: '🍪',
    price: 42,
    description: 'Con trozos de galleta crocante',
    category: 'Helados Especiales'
  },
  {
    id: 10,
    name: 'Smoothie de Frutas',
    emoji: '🍹',
    price: 50,
    description: 'Mezcla de frutas naturales congeladas',
    category: 'Bebidas'
  },
  {
    id: 11,
    name: 'Helado de Pistacho',
    emoji: '🍧',
    price: 48,
    description: 'Premium con pistachos reales',
    category: 'Helados Especiales'
  },
  {
    id: 12,
    name: 'Cono de Waffle',
    emoji: '🧇',
    price: 45,
    description: 'Helado servido en cono de waffle artesanal',
    category: 'Helados Clásicos'
  }
]);

const selectedCategory = ref('Todos');
const categories = ref(['Todos', 'Helados Clásicos', 'Helados Especiales', 'Sundaes', 'Paletas', 'Bebidas', 'Pasteles']);

const filteredProducts = ref(products.value);

const filterByCategory = (category) => {
  selectedCategory.value = category;
  if (category === 'Todos') {
    filteredProducts.value = products.value;
  } else {
    filteredProducts.value = products.value.filter(p => p.category === category);
  }
};
</script>

<template>
  <div class="feed-container">
    <div class="feed-header">
      <h1 class="page-title">
        <span class="emoji">🍨</span>
        Nuestros Productos
      </h1>
      <p class="page-subtitle">Helados y postres fríos elaborados diariamente</p>
    </div>

    <!-- Category Filter -->
    <div class="category-filter">
      <button
        v-for="category in categories"
        :key="category"
        @click="filterByCategory(category)"
        :class="['filter-btn', { active: selectedCategory === category }]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Products Grid -->
    <div class="products-grid">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
      >
        <div class="product-emoji">{{ product.emoji }}</div>
        <div class="product-info">
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
          <div class="product-footer">
            <span class="product-price">${{ product.price }}</span>
            <button class="add-to-cart-btn">
              <span>🛒</span> Agregar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredProducts.length === 0" class="empty-state">
      <div class="empty-emoji">📭</div>
      <p>No hay productos en esta categoría</p>
    </div>
  </div>
</template>

<style scoped>
.feed-container {
  width: 100%;
}

.feed-header {
  text-align: center;
  margin-bottom: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 212, 255, 0.2);
}

.page-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.page-title .emoji {
  font-size: 3rem;
}

.page-subtitle {
  font-size: 1.2rem;
  background: linear-gradient(135deg, #00d4ff 0%, #ff85e1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.category-filter {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 212, 255, 0.2);
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #00d4ff;
  background: white;
  color: #00d4ff;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  background: rgba(0, 212, 255, 0.1);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, #00d4ff 0%, #00a8ff 100%);
  color: white;
  box-shadow: 0 4px 8px rgba(0, 212, 255, 0.4);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 212, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 212, 255, 0.3);
}

.product-emoji {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.product-info {
  width: 100%;
}

.product-name {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.product-description {
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #f0f0f0;
}

.product-price {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00d4ff 0%, #00a8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.add-to-cart-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background: linear-gradient(135deg, #00d4ff 0%, #00a8ff 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 212, 255, 0.4);
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 212, 255, 0.2);
}

.empty-emoji {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.empty-state p {
  font-size: 1.2rem;
  color: #666;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .category-filter {
    flex-direction: column;
  }

  .filter-btn {
    width: 100%;
  }

  .product-footer {
    flex-direction: column;
  }

  .add-to-cart-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>