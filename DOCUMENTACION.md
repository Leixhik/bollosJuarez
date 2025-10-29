# 🍦 Heladería Juárez - Documentación

## Tabla de Contenidos

1. [Documentación de Usuario](#documentación-de-usuario)
   - [Introducción](#introducción)
   - [Características Principales](#características-principales)
   - [Guía de Uso](#guía-de-uso)
   - [Preguntas Frecuentes](#preguntas-frecuentes)
2. [Documentación Técnica](#documentación-técnica)
   - [Requisitos del Sistema](#requisitos-del-sistema)
   - [Arquitectura](#arquitectura)
   - [Instalación y Configuración](#instalación-y-configuración)
   - [Estructura del Proyecto](#estructura-del-proyecto)
   - [Tecnologías Utilizadas](#tecnologías-utilizadas)
   - [Despliegue](#despliegue)

---

## Documentación de Usuario

### Introducción

Bienvenido a **Heladería Juárez**, la aplicación web oficial de la heladería más tradicional de la ciudad. Nuestra plataforma te permite explorar nuestro catálogo completo de productos, desde helados clásicos hasta creaciones especiales, todo desde la comodidad de tu hogar.

**Heladería Juárez** lleva más de 30 años endulzando momentos especiales con helados artesanales elaborados con ingredientes naturales y recetas únicas.

### Características Principales

- **🍨 Catálogo Completo**: Explora más de 50 sabores diferentes de helados y postres fríos
- **🔐 Registro y Autenticación**: Crea tu cuenta para acceder a funciones exclusivas
- **🌈 Filtrado por Categorías**: Encuentra fácilmente productos por categoría (Clásicos, Especiales, Sundaes, Paletas, Bebidas, Pasteles)
- **📱 Diseño Responsivo**: Disfruta de una experiencia óptima en cualquier dispositivo
- **❄️ Productos Frescos**: Todo elaborado diariamente con ingredientes naturales
- **🚚 Entrega a Domicilio**: Servicio disponible con empaque térmico especial

### Guía de Uso

#### 1. Navegación en la Página Principal

Al ingresar a la aplicación, encontrarás:

- **Hero Section**: Una presentación destacada de la heladería
- **¿Por qué elegirnos?**: Características que nos hacen únicos:
  - 🥛 Ingredientes Naturales
  - 🌈 Sabores Únicos
  - ❄️ Siempre Fresco
  - 🚚 Entrega a Domicilio
- **Nuestras Especialidades**: Vista previa de las categorías principales
- **Botones de Acción Rápida**: Acceso directo al catálogo y registro

#### 2. Explorar Productos

**Acceso**: Desde el menú principal, haz clic en "🍨 Productos"

En la página de productos podrás:

- Ver el catálogo completo con 12+ productos
- Filtrar por categorías:
  - Helados Clásicos (Vainilla, Chocolate, Fresa, etc.)
  - Helados Especiales (Mango, Cookies & Cream, Pistacho)
  - Sundaes
  - Paletas
  - Bebidas (Malteadas, Smoothies)
  - Pasteles Helados
- Ver información de cada producto:
  - Nombre y emoji representativo
  - Descripción detallada
  - Precio en pesos mexicanos
  - Botón "Agregar" para futura funcionalidad de carrito

#### 3. Crear una Cuenta

**Acceso**: Haz clic en "📝 Registro" en el menú principal

1. Completa el formulario de registro con:
   - Correo electrónico
   - Contraseña segura
2. Haz clic en "Registrarse"
3. Una vez registrado, serás redirigido automáticamente

#### 4. Iniciar Sesión

**Acceso**: Haz clic en "🔐 Iniciar Sesión" en el menú

1. Ingresa tu correo electrónico
2. Ingresa tu contraseña
3. Haz clic en "Iniciar Sesión"
4. Una vez autenticado:
   - Tu correo aparecerá en el menú
   - Tendrás acceso a la página de productos
   - Verás un botón "🚪 Cerrar Sesión"

#### 5. Cerrar Sesión

Cuando hayas iniciado sesión, encontrarás tu correo en el menú junto con un botón "🚪Cerrar Sesión". Haz clic en él para cerrar tu sesión de forma segura.

### Preguntas Frecuentes

**P: ¿Necesito crear una cuenta para ver los productos?**  
R: No, puedes ver el catálogo sin crear una cuenta, pero necesitarás una para acceder a funcionalidades futuras como el carrito de compras.

**P: ¿Los precios incluyen IVA?**  
R: Sí, todos los precios mostrados ya incluyen IVA.

**P: ¿Cómo puedo hacer un pedido?**  
R: La funcionalidad de carrito de compras está en desarrollo. Por ahora, puedes ver nuestro catálogo y contactarnos directamente.

**P: ¿La aplicación funciona en móviles?**  
R: Sí, la aplicación está completamente optimizada para dispositivos móviles, tablets y computadoras de escritorio.

**P: ¿Olvide mi contraseña, qué hago?**  
R: La funcionalidad de recuperación de contraseña estará disponible próximamente. Por ahora, contacta al soporte.

---

## Documentación Técnica

### Requisitos del Sistema

#### Desarrollo

- **Node.js**: v16.0.0 o superior
- **npm**: v7.0.0 o superior
- **Navegador**: Chrome, Firefox, Safari o Edge (versiones recientes)

#### Producción

- Servidor web con capacidad para servir aplicaciones SPA
- Certificado SSL recomendado para HTTPS
- Cuenta de Firebase con proyecto configurado

### Arquitectura

La aplicación está construida siguiendo la arquitectura de **Single Page Application (SPA)** con las siguientes capas:

```
┌─────────────────────────────────────┐
│         Frontend (Vue 3)            │
│  ┌──────────────────────────────┐   │
│  │   Componentes Vue (SFC)      │   │
│  └──────────────────────────────┘   │
│  ┌──────────────────────────────┐   │
│  │    Vue Router (Navegación)   │   │
│  └──────────────────────────────┘   │
│  ┌──────────────────────────────┐   │
│  │  Estado Local (Composition   │   │
│  │         API)                 │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
              ↕
┌─────────────────────────────────────┐
│    Firebase Backend Services        │
│  ┌──────────────────────────────┐   │
│  │   Firebase Authentication    │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

#### Componentes Principales

1. **App.vue**: Componente raíz con navegación y autenticación
2. **Router**: Gestión de rutas y protección de rutas privadas
3. **Views**: Páginas principales (Home, Feed, Register, SignIn)
4. **Firebase Auth**: Autenticación de usuarios

### Instalación y Configuración

#### 1. Clonar el Repositorio

```bash
git clone https://github.com/Leixhik/bollosJuarez.git
cd bollosJuarez
```

#### 2. Instalar Dependencias

```bash
npm install
```

#### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

**⚠️ IMPORTANTE**: Nunca subas el archivo `.env` al repositorio. Está incluido en `.gitignore` para proteger tus credenciales.

#### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

#### 5. Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

#### 6. Vista Previa de Producción

```bash
npm run preview
```

### Estructura del Proyecto

```
bollosJuarez/
├── public/                    # Archivos estáticos públicos
├── src/
│   ├── assets/               # Recursos (imágenes, estilos globales)
│   ├── components/           # Componentes reutilizables
│   │   └── HelloWorld.vue   # Componente de ejemplo
│   ├── router/              # Configuración de rutas
│   │   └── index.js         # Router principal con protección de rutas
│   ├── views/               # Vistas/Páginas de la aplicación
│   │   ├── Home.vue         # Página de inicio
│   │   ├── Feed.vue         # Catálogo de productos
│   │   ├── Register.vue     # Registro de usuarios
│   │   └── SignIn.vue       # Inicio de sesión
│   ├── App.vue              # Componente raíz
│   ├── main.js              # Punto de entrada, configuración Firebase
│   └── style.css            # Estilos globales
├── .gitignore               # Archivos ignorados por Git
├── index.html               # HTML principal
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
└── DOCUMENTACION.md         # Este archivo
```

### Tecnologías Utilizadas

#### Frontend

- **Vue 3** (v3.5.22): Framework JavaScript progresivo
  - Composition API con `<script setup>`
  - Single File Components (SFC)
  - Reactive state management
- **Vue Router** (v4.6.3): Enrutamiento oficial de Vue
  - Lazy loading de componentes
  - Navegación programática
  - Protección de rutas (Navigation Guards)
- **Vite** (v7.1.7): Build tool y dev server
  - Hot Module Replacement (HMR)
  - Compilación optimizada para producción
  - ESM nativo

#### Backend Services

- **Firebase** (v12.4.0)
  - **Firebase Authentication**: Gestión de usuarios
    - Email/Password authentication
    - Estado de autenticación persistente
    - Observers de estado de autenticación

#### Desarrollo

- **@vitejs/plugin-vue** (v6.0.1): Plugin oficial de Vue para Vite

### Características Técnicas Implementadas

#### 1. Autenticación con Firebase

**Archivo**: `src/main.js`, `src/App.vue`

```javascript
// Inicialización de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuración con variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // ...
};

initializeApp(firebaseConfig);
```

**Características**:
- Configuración segura con variables de entorno
- Estado de autenticación reactivo
- Observador de cambios de autenticación (`onAuthStateChanged`)
- Cierre de sesión seguro

#### 2. Protección de Rutas

**Archivo**: `src/router/index.js`

```javascript
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("No tienes permisos para esto");
      next("/");
    }
  } else {
    next();
  }
});
```

La ruta `/feed` está protegida y requiere autenticación.

#### 3. Sistema de Componentes

**Composition API con `<script setup>`**:
```vue
<script setup>
import { ref, computed } from 'vue';

const products = ref([...]);
const selectedCategory = ref('Todos');

const filteredProducts = computed(() => {
  // lógica de filtrado
});
</script>
```

#### 4. Diseño Responsivo

- Mobile-first approach
- Media queries para diferentes tamaños de pantalla
- Flexbox y CSS Grid para layouts adaptables
- Navegación optimizada para móviles

#### 5. Estilos y UX

- Gradientes coloridos inspirados en helados
- Animaciones CSS suaves
- Efectos hover interactivos
- Emojis para mejor experiencia visual
- Sombras y efectos de profundidad

### Flujo de Autenticación

```
1. Usuario visita la app
   ↓
2. App.vue inicia observer de autenticación
   ↓
3. Firebase verifica estado (onAuthStateChanged)
   ↓
4. Si hay usuario → isLoggedIn = true
   Si no hay usuario → isLoggedIn = false
   ↓
5. UI se actualiza reactivamente
   ↓
6. Router protege rutas según estado
```

### API de Firebase Utilizada

#### Authentication

```javascript
// Obtener instancia de Auth
import { getAuth } from "firebase/auth";
const auth = getAuth();

// Observer de estado
import { onAuthStateChanged } from "firebase/auth";
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Usuario autenticado
  } else {
    // Usuario no autenticado
  }
});

// Cerrar sesión
import { signOut } from "firebase/auth";
signOut(auth).then(() => {
  // Sesión cerrada
});
```

### Despliegue

#### Opción 1: Vercel (Recomendado)

1. Conecta tu repositorio de GitHub con Vercel
2. Configura las variables de entorno en Vercel:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - etc.
3. Vercel detectará automáticamente Vite
4. Deploy automático en cada push

#### Opción 2: Netlify

1. Conecta tu repositorio con Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Configura las variables de entorno
5. Deploy

#### Opción 3: Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login en Firebase
firebase login

# Inicializar hosting
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy --only hosting
```

#### Configuración para SPA

Para todas las opciones, asegúrate de configurar las redirecciones para SPA:

**Netlify** (`_redirects`):
```
/*    /index.html   200
```

**Vercel** (`vercel.json`):
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Firebase** (`firebase.json`):
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Seguridad

#### Buenas Prácticas Implementadas

1. **Variables de Entorno**: Credenciales de Firebase en variables de entorno
2. **`.gitignore`**: Archivo `.env` excluido del repositorio
3. **Protección de Rutas**: Navigation guards para rutas privadas
4. **HTTPS**: Recomendado para producción
5. **Firebase Rules**: Configura reglas de seguridad en Firebase Console

#### Configuración de Firebase Security Rules (Recomendado)

```javascript
// Firestore Rules (para futuro uso)
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}

// Storage Rules (para futuro uso)
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Mantenimiento y Actualizaciones

#### Actualizar Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar dependencias menores
npm update

# Actualizar dependencias mayores (con cuidado)
npm install vue@latest
npm install firebase@latest
```

#### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa de build
```

### Próximas Funcionalidades (Roadmap)

- 🛒 Carrito de compras funcional
- 💳 Integración de pagos
- 📦 Seguimiento de pedidos
- 👤 Perfil de usuario con historial
- ⭐ Sistema de favoritos
- 💬 Sistema de reseñas y calificaciones
- 🔔 Notificaciones
- 📧 Recuperación de contraseña
- 🗄️ Integración con Firestore para productos dinámicos
- 📊 Panel de administración

### Solución de Problemas

#### Error: "vite: not found"

**Solución**: Ejecuta `npm install` para instalar las dependencias.

#### Error al hacer build

**Causa**: Variables de entorno no configuradas.  
**Solución**: Verifica que el archivo `.env` existe con todas las variables necesarias.

#### La autenticación no funciona

**Causa**: Configuración incorrecta de Firebase.  
**Solución**: 
1. Verifica las credenciales en `.env`
2. Asegúrate de que Firebase Authentication esté habilitado en la consola
3. Verifica que el método Email/Password esté activado

#### Rutas no funcionan después del deploy

**Causa**: Configuración SPA incorrecta en el hosting.  
**Solución**: Configura las redirecciones según la plataforma (ver sección de Despliegue).

### Contribuciones

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

### Soporte y Contacto

Para soporte técnico o consultas sobre la aplicación:

- **Email**: [correo de soporte]
- **GitHub Issues**: [URL del repositorio]/issues
- **Documentación**: Este archivo

---

**Última actualización**: 2025  
**Versión**: 0.0.0  
**Licencia**: Privada

© 2025 Heladería Juárez - Refrescando tus días con sabor ❄️🍦
