# 🍕 Pizzería Mamma Mia

Una aplicación web moderna para una pizzería construida con React y Vite, integrada con un backend API para gestión de pizzas.

## 🚀 Características

- **Catálogo de Pizzas**: Visualiza todas las pizzas disponibles con imágenes y precios desde API
- **Páginas de Detalle**: Información completa de cada pizza con navegación dinámica
- **Carrito de Compras**: Agrega y gestiona tus pedidos
- **Autenticación**: Sistema de login y registro de usuarios
- **Integración con Backend**: Consumo de API REST para datos dinámicos
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Navegación Intuitiva**: Fácil navegación entre secciones

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **React Router DOM** - Enrutamiento para aplicaciones React
- **Bootstrap 5** - Framework CSS para diseño responsivo
- **ESLint** - Linter para mantener código limpio

## 📦 Instalación

### Frontend

1. Clona el repositorio:

```bash
git clone [URL_DEL_REPOSITORIO]
cd pizzeria-mamma-mia
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### Backend (Requerido)

Para que la aplicación funcione completamente, necesitas levantar el backend:

1. Descarga el "Material de apoyo - Backend Pizzas"
2. Instala las dependencias del backend:
   ```bash
   npm install
   ```
3. Levanta el servidor del backend:
   ```bash
   npm start
   ```
4. El backend se ejecutará en `http://localhost:5000`

**⚠️ Importante**: El frontend requiere que el backend esté ejecutándose para mostrar las pizzas correctamente.

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código
- `npm run deploy` - Despliega la aplicación a GitHub Pages

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── CardPizza.jsx   # Tarjeta de pizza individual (clickeable)
│   ├── Cart.jsx        # Componente del carrito
│   ├── Header.jsx      # Encabezado de la aplicación
│   ├── Footer.jsx      # Pie de página
│   ├── Navbar.jsx      # Barra de navegación
│   ├── LoginPage.jsx   # Página de inicio de sesión
│   ├── RegisterPage.jsx # Página de registro
│   └── Pizza.jsx       # Página de detalle de pizza individual
├── context/            # Contextos de React
│   └── CartContext.jsx # Contexto del carrito de compras
├── data/               # Datos estáticos (ya no se usa, reemplazado por API)
│   └── pizzas.js       # Información de las pizzas (legacy)
├── views/              # Páginas principales
│   └── Home.jsx        # Página de inicio (consume API)
├── utils/              # Utilidades
│   └── format.js       # Funciones de formateo
└── assets/             # Recursos estáticos
    └── imgs/           # Imágenes
```

## 🎨 Funcionalidades

### 🍕 Catálogo de Pizzas

- **Consumo de API**: Las pizzas se cargan dinámicamente desde el backend
- **Estados de carga**: Indicadores visuales mientras se cargan los datos
- **Manejo de errores**: Mensajes informativos si hay problemas de conexión
- **Tarjetas clickeables**: Navegación directa a la página de detalle
- **Información básica**: nombre, precio e ingredientes en cada tarjeta

### 🍕 Páginas de Detalle de Pizza

- **Navegación dinámica**: URLs como `/pizza/P001` para cada pizza
- **Información completa**:
  - Nombre de la pizza
  - Precio formateado
  - Lista de ingredientes como badges
  - Imagen de alta calidad
  - Descripción detallada
- **Estados de carga y error**: Manejo robusto de diferentes escenarios
- **Navegación de regreso**: Botón para volver al menú principal

### 🛒 Carrito de Compras

- Agregar pizzas al carrito
- Modificar cantidades
- Eliminar productos
- Cálculo automático del total

### 👤 Autenticación

- Sistema de registro de nuevos usuarios
- Inicio de sesión
- Gestión de sesiones

## 🔌 Integración con Backend

### Endpoints Utilizados

- **GET** `http://localhost:5000/api/pizzas` - Obtiene todas las pizzas disponibles

### Características de la Integración

- **useEffect**: Hook utilizado para consumir la API al montar componentes
- **fetch API**: Peticiones HTTP nativas para obtener datos
- **Manejo de estados**: Loading, error y success states
- **Navegación por ID**: Búsqueda de pizzas específicas por su identificador

## 🚀 Despliegue

### Frontend (GitHub Pages)

Para desplegar el frontend en GitHub Pages:

1. Asegúrate de tener `gh-pages` instalado
2. Ejecuta: `npm run deploy`
3. La aplicación estará disponible en: `https://[tu-usuario].github.io/pizzeria-mamma-mia`

### Backend

El backend debe estar desplegado en un servicio como:

- **Heroku**
- **Railway**
- **Vercel**
- **Netlify**

Y actualizar la URL de la API en el código del frontend.

## 🧪 Pruebas

### Verificar Funcionalidad

1. **Backend funcionando**: Asegúrate de que el backend esté en `http://localhost:5000`
2. **Frontend funcionando**: Ejecuta `npm run dev` y ve a `http://localhost:5173`
3. **Carga de pizzas**: Verifica que las pizzas se cargan desde la API
4. **Navegación**: Haz clic en cualquier pizza para ver su detalle
5. **Estados de error**: Prueba desconectando el backend para ver los mensajes de error

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📋 Changelog

### v2.0.0 - Integración con Backend API

#### ✨ Nuevas Funcionalidades

- **Integración completa con backend API**
- **Páginas de detalle de pizza** con navegación dinámica
- **Estados de carga y error** en todos los componentes
- **Tarjetas clickeables** para navegación mejorada

#### 🔧 Mejoras Técnicas

- **useEffect** para consumo de API
- **fetch API** para peticiones HTTP
- **Manejo robusto de errores**
- **Navegación por parámetros de URL**
- **Estados de loading** con indicadores visuales

#### 📁 Archivos Modificados

- `src/views/Home.jsx` - Consumo de API y estados
- `src/components/Pizza.jsx` - Nuevo componente de detalle
- `src/components/CardPizza.jsx` - Navegación clickeable
- `src/App.jsx` - Nuevas rutas

#### 🗑️ Deprecado

- `src/data/pizzas.js` - Reemplazado por datos de API

## 👨‍💻 Autor

Desarrollado con ❤️ para la pizzería Mamma Mia

---

¡Disfruta de tu pizza! 🍕
