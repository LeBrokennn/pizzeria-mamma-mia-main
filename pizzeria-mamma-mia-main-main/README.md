# 🍕 Pizzería Mamma Mia

Una aplicación web moderna para una pizzería construida con React y Vite, integrada con un backend API para gestión de pizzas.

## 🚀 Características

- **Catálogo de Pizzas**: Visualiza todas las pizzas disponibles con imágenes y precios desde API
- **Páginas de Detalle**: Información completa de cada pizza con navegación dinámica
- **Carrito de Compras Completo**:
  - Agrega productos desde Home y páginas de detalle
  - Gestiona cantidades (incrementar/decrementar)
  - Elimina productos del carrito
  - Cálculo automático del total
  - Visualización del total en el Navbar
- **Context API**: Gestión de estado global para carrito y pizzas
- **Autenticación**: Sistema de login y registro de usuarios
- **Perfil de Usuario**: Gestión de información personal y sesión
- **Sistema de Rutas**: Navegación completa con React Router DOM
- **Página 404**: Manejo elegante de rutas no encontradas
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

## 🔑 Credenciales de Prueba

Para probar la aplicación, puedes usar estas credenciales o crear un nuevo usuario:

### Usuario de Prueba

**Email**: `test@ejemplo.com`  
**Contraseña**: `123456`

> **Nota**: Si el backend tiene credenciales diferentes predefinidas, actualiza esta sección con las credenciales correctas. También puedes crear un nuevo usuario desde la página de Registro.

### Inicio Rápido

1. **Levanta el backend** en `http://localhost:5000`
2. **Levanta el frontend** con `npm run dev`
3. **Regístrate** o **Inicia sesión** con las credenciales de arriba
4. **Agrega pizzas** al carrito desde el home
5. **Ve al carrito** y haz clic en **Pagar** (requiere estar autenticado)
6. **Verifica** que se muestra el mensaje de éxito y el carrito se limpia

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
│   ├── Header.jsx      # Encabezado de la aplicación
│   ├── Footer.jsx      # Pie de página
│   └── Navbar.jsx      # Barra de navegación con enlaces
├── pages/              # Páginas principales (React Router)
│   ├── Home.jsx        # Página de inicio (consume API)
│   ├── Login.jsx       # Página de inicio de sesión
│   ├── Register.jsx    # Página de registro
│   ├── Cart.jsx        # Página del carrito de compras
│   ├── Pizza.jsx       # Página de detalle de pizza individual
│   ├── Profile.jsx     # Página de perfil de usuario
│   └── NotFound.jsx    # Página 404 para rutas no encontradas
├── context/            # Contextos de React
│   ├── CartContext.jsx # Contexto del carrito de compras
│   ├── PizzaContext.jsx # Contexto para gestión de pizzas
│   └── UserContext.jsx # Contexto de autenticación y usuario
├── components/         # Componentes reutilizables
│   └── ProtectedRoute.jsx # Componente para proteger rutas
├── data/               # Datos estáticos (ya no se usa, reemplazado por API)
│   └── pizzas.js       # Información de las pizzas (legacy)
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

- **Agregar productos**: Desde las cards en Home y páginas de detalle
- **Gestión de cantidades**: Botones para incrementar/decrementar
- **Eliminar productos**: Automático cuando la cantidad llega a 0
- **Cálculo automático del total**: Se actualiza en tiempo real
- **Visualización en Navbar**: Total siempre visible en la navegación
- **Página de carrito completa**: Lista de productos con controles de cantidad
- **Resumen de compra**: Total final y botón de pago
- **Checkout funcional**: Envío del carrito al backend en `/api/checkouts`
- **Mensajes de éxito/error**: Notificaciones al realizar la compra
- **Limpieza automática**: El carrito se limpia después de una compra exitosa
- **Estado vacío**: Catálogo de pizzas cuando el carrito está vacío

### 👤 Autenticación

- **Registro de usuarios**: Crear nueva cuenta con email y contraseña
- **Inicio de sesión**: Login con credenciales almacenadas
- **Logout**: Cerrar sesión desde Navbar o Perfil
- **Persistencia de sesión**: Token y email guardados en localStorage
- **Protección de rutas**: Rutas protegidas que requieren autenticación
- **Integración completa con backend**: Consumo de API `/api/auth/login` y `/api/auth/register`

### 👤 Perfil de Usuario

- **Información personal**: Visualización del email del usuario autenticado
- **Obtención de perfil**: Carga automática desde `/api/auth/me`
- **Estado de cuenta**: Indicador de cuenta activa
- **Cerrar sesión**: Botón funcional para finalizar la sesión
- **Navegación**: Enlaces de regreso al inicio

### 🛣️ Sistema de Rutas

- **Navegación completa**: 7 rutas principales configuradas
- **Rutas dinámicas**: Parámetros de URL para pizzas específicas
- **Página 404**: Manejo elegante de rutas no encontradas
- **Navegación activa**: Estados visuales en el menú de navegación
- **Enlaces del carrito**: Botón que redirige al carrito con total actualizado

#### Rutas Disponibles

| Ruta         | Componente | Descripción                             |
| ------------ | ---------- | --------------------------------------- |
| `/`          | Home       | Página principal con catálogo de pizzas |
| `/login`     | Login      | Página de inicio de sesión              |
| `/register`  | Register   | Página de registro de usuarios          |
| `/cart`      | Cart       | Página del carrito de compras           |
| `/pizza/:id` | Pizza      | Página de detalle de pizza específica   |
| `/profile`   | Profile    | Página de perfil del usuario            |
| `/404`       | NotFound   | Página de error 404                     |
| `*`          | NotFound   | Catch-all para rutas no definidas       |

## 🔌 Integración con Backend

### Endpoints Utilizados

#### Autenticación
- **POST** `http://localhost:5000/api/auth/register` - Registrar nuevo usuario
  - Body: `{ email: string, password: string }`
  - Response: `{ token: string, email: string }`
- **POST** `http://localhost:5000/api/auth/login` - Iniciar sesión
  - Body: `{ email: string, password: string }`
  - Response: `{ token: string, email: string }`
- **GET** `http://localhost:5000/api/auth/me` - Obtener perfil del usuario autenticado
  - Headers: `Authorization: Bearer {token}`
  - Response: `{ email: string, ... }`

#### Pizzas
- **GET** `http://localhost:5000/api/pizzas` - Obtiene todas las pizzas disponibles
- **GET** `http://localhost:5000/api/pizzas/:id` - Obtiene una pizza específica por ID

#### Checkout
- **POST** `http://localhost:5000/api/checkouts` - Procesar compra del carrito
  - Headers: `Authorization: Bearer {token}`
  - Body: `{ items: Array, total: number }`
  - Response: Datos de la compra procesada

### Características de la Integración

- **useEffect**: Hook utilizado para consumir la API al montar componentes
- **fetch API**: Peticiones HTTP nativas para obtener datos
- **Autenticación JWT**: Token almacenado y enviado en headers
- **Persistencia de sesión**: Token y email guardados en localStorage
- **Manejo de estados**: Loading, error y success states
- **Protección de rutas**: Verificación de autenticación antes de acceder
- **Navegación por ID**: Búsqueda de pizzas específicas por su identificador

## 🛣️ Sistema de Navegación

### Características del Router

- **React Router DOM v7.8.2**: Sistema de enrutamiento moderno y eficiente
- **Navegación declarativa**: Uso de componentes `Link` y `NavLink`
- **Estados activos**: Indicadores visuales de la página actual
- **Navegación programática**: Control de navegación desde JavaScript
- **Rutas anidadas**: Soporte para rutas complejas y parámetros

### Componentes de Navegación

#### Navbar

- **Enlaces dinámicos**: Cambia según el estado de autenticación
- **Botón del carrito**: Muestra el total y redirige a `/cart`
- **Estados activos**: Resalta la página actual
- **Responsive**: Adaptable a diferentes tamaños de pantalla

#### Navegación entre páginas

- **Home** (`/`): Catálogo principal de pizzas
- **Login** (`/login`): Formulario de inicio de sesión
- **Register** (`/register`): Formulario de registro
- **Cart** (`/cart`): Carrito de compras
- **Pizza** (`/pizza/:id`): Detalle de pizza específica
- **Profile** (`/profile`): Perfil del usuario
- **404** (`/404`): Página de error personalizada

### Manejo de Errores

- **Catch-all routes**: Captura todas las rutas no definidas
- **Página 404 personalizada**: Diseño atractivo con opciones de navegación
- **Enlaces de recuperación**: Botones para volver al inicio o carrito
- **Mensajes informativos**: Guías para el usuario sobre qué hacer

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
5. **Sistema de rutas**: Prueba todas las rutas desde el menú de navegación
6. **Página 404**: Visita una URL inexistente para ver la página de error
7. **Carrito**: Verifica que el botón del carrito redirija correctamente
8. **Estados de error**: Prueba desconectando el backend para ver los mensajes de error

### 🔐 Credenciales de Prueba

Para probar el sistema de autenticación, puedes usar las siguientes credenciales (si el backend las tiene predefinidas) o crear un nuevo usuario:

#### Opción 1: Crear un nuevo usuario
1. Ve a la página de **Registro** (`/register`)
2. Completa el formulario con:
   - **Email**: `test@ejemplo.com` (o cualquier email válido)
   - **Contraseña**: `123456` (mínimo 6 caracteres)
   - **Confirmar contraseña**: `123456`
3. Haz clic en **Registrarse**
4. Serás redirigido automáticamente al home

#### Opción 2: Iniciar sesión (si tienes usuario existente)
1. Ve a la página de **Login** (`/login`)
2. Ingresa tus credenciales:
   - **Email**: `test@ejemplo.com` (o el email que hayas registrado)
   - **Contraseña**: `123456` (o la contraseña que hayas usado)
3. Haz clic en **Ingresar**
4. Serás redirigido automáticamente al home

#### Funcionalidades para probar:

✅ **Autenticación**:
- Registrar nuevo usuario
- Iniciar sesión con credenciales válidas
- Verificar que las rutas protegidas requieren autenticación
- Acceder a `/profile` para ver tu email
- Cerrar sesión desde Navbar o Perfil

✅ **Carrito y Checkout**:
- Agregar pizzas al carrito
- Modificar cantidades
- Ir al carrito (`/cart`)
- Iniciar sesión (requerido para checkout)
- Hacer clic en **Pagar** para procesar la compra
- Ver mensaje de éxito
- Verificar que el carrito se limpia después de la compra

### ⚠️ Nota Importante

Si el backend tiene usuarios predefinidos, consulta la documentación del backend para obtener las credenciales de prueba correctas. Si necesitas cambiar las credenciales de ejemplo en esta documentación, edita la sección "Credenciales de Prueba" con los datos correctos.

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

### v5.0.0 - Autenticación Completa y Checkout

#### ✨ Nuevas Funcionalidades

- **Sistema de autenticación completo**:
  - Login funcional con integración al backend `/api/auth/login`
  - Registro de usuarios con integración al backend `/api/auth/register`
  - Logout que limpia sesión y redirige
  - Persistencia de sesión con localStorage
- **Perfil de usuario mejorado**:
  - Obtención automática del perfil desde `/api/auth/me`
  - Visualización del email del usuario autenticado
  - Botón de logout funcional
- **Checkout funcional**:
  - Envío del carrito al backend en `/api/checkouts`
  - Mensajes de éxito y error
  - Limpieza automática del carrito después de compra exitosa
  - Validación de autenticación antes de procesar compra
- **Protección de rutas**:
  - Rutas protegidas que requieren autenticación
  - Redirección automática a login si no está autenticado
  - Redirección a home si intenta acceder a login/register estando autenticado

#### 🔧 Mejoras Técnicas

- **UserContext completo**:
  - Métodos `login()`, `register()`, `logout()`, `getProfile()`
  - Gestión de estado de token y email
  - Persistencia en localStorage
  - Manejo de errores en todas las peticiones
- **Integración con backend**:
  - Autenticación JWT con Bearer token
  - Headers de autorización en peticiones protegidas
  - Manejo de estados de carga y errores
- **CartContext mejorado**:
  - Método `clear()` para limpiar el carrito
- **UX mejorada**:
  - Estados de carga en formularios
  - Mensajes de éxito/error claros
  - Redirecciones automáticas después de acciones

#### 📁 Archivos Modificados

- `src/context/UserContext.jsx` - **COMPLETAMENTE REFACTORIZADO** - Sistema completo de autenticación
- `src/pages/Login.jsx` - Integrado con UserContext y backend
- `src/pages/Register.jsx` - Integrado con UserContext y backend
- `src/pages/Profile.jsx` - Muestra email real y logout funcional
- `src/pages/Cart.jsx` - Checkout implementado con mensajes
- `src/components/Navbar.jsx` - Logout funcional con redirección
- `src/context/CartContext.jsx` - Método clear() agregado

#### 🎯 Endpoints del Backend Utilizados

1. **POST** `/api/auth/register` - Registrar nuevo usuario
2. **POST** `/api/auth/login` - Iniciar sesión
3. **GET** `/api/auth/me` - Obtener perfil del usuario
4. **POST** `/api/checkouts` - Procesar compra del carrito

### v4.0.0 - Sistema de Carrito de Compras Completo

#### ✨ Nuevas Funcionalidades

- **Carrito de compras completo** con Context API
- **PizzaContext** para gestión centralizada de datos de pizzas
- **Funcionalidad de agregar productos** desde Home y páginas de detalle
- **Gestión de cantidades** con botones incrementar/decrementar
- **Eliminación automática** de productos cuando cantidad llega a 0
- **Cálculo automático del total** en tiempo real
- **Visualización del total** en el Navbar
- **Página de carrito mejorada** con controles de cantidad y resumen

#### 🔧 Mejoras Técnicas

- **Context API** para gestión de estado global
- **PizzaContext** centraliza el fetch de pizzas
- **CartContext** maneja todo el estado del carrito
- **Hooks personalizados** (useCart, usePizza) para consumo de contextos
- **Optimización de renders** con useMemo para cálculos
- **Gestión de estado unificada** entre componentes

#### 📁 Archivos Creados

- `src/context/PizzaContext.jsx` - **NUEVO** - Contexto para gestión de pizzas
- `src/context/CartContext.jsx` - **MEJORADO** - Contexto del carrito (ya existía)

#### 📁 Archivos Modificados

- `src/App.jsx` - Integración de PizzaProvider
- `src/pages/Home.jsx` - Uso de PizzaContext
- `src/components/Pizza.jsx` - Uso de PizzaContext y CartContext
- `src/components/CardPizza.jsx` - Integración con CartContext
- `src/pages/Cart.jsx` - **YA IMPLEMENTADO** - Página completa del carrito
- `src/components/Navbar.jsx` - **YA IMPLEMENTADO** - Muestra total del carrito

#### 🎯 Funcionalidades del Carrito

1. **Agregar productos**:

   - Botón "Añadir" en cards de Home
   - Botón "Agregar al Carrito" en páginas de detalle

2. **Gestión de cantidades**:

   - Botones + y - en la página del carrito
   - Eliminación automática cuando cantidad = 0

3. **Visualización**:

   - Total en tiempo real en el Navbar
   - Lista completa de productos en página Cart
   - Resumen de compra con total final

4. **Estados**:
   - Carrito vacío muestra catálogo de pizzas
   - Carrito con productos muestra lista y controles

### v3.0.0 - Sistema de Rutas con React Router

#### ✨ Nuevas Funcionalidades

- **Sistema completo de rutas** con React Router DOM
- **Página de perfil de usuario** con gestión de sesión
- **Página 404 personalizada** para rutas no encontradas
- **Navegación mejorada** con estados activos
- **Reorganización de componentes** en carpeta `pages/`

#### 🔧 Mejoras Técnicas

- **React Router DOM v7.8.2** para enrutamiento
- **NavLink** para navegación con estados activos
- **Rutas dinámicas** con parámetros de URL
- **Catch-all routes** para manejo de errores 404
- **Navegación programática** con useNavigate

#### 📁 Archivos Creados

- `src/pages/Home.jsx` - Página principal (movida desde views/)
- `src/pages/Login.jsx` - Página de login (movida desde components/)
- `src/pages/Register.jsx` - Página de registro (movida desde components/)
- `src/pages/Cart.jsx` - Página del carrito (movida desde components/)
- `src/pages/Pizza.jsx` - Página de detalle (movida desde components/)
- `src/pages/Profile.jsx` - **NUEVA** - Página de perfil de usuario
- `src/pages/NotFound.jsx` - **NUEVA** - Página 404 personalizada

#### 📁 Archivos Modificados

- `src/App.jsx` - Configuración completa de rutas
- `src/components/Navbar.jsx` - Enlaces de navegación actualizados

#### 🗑️ Deprecado

- `src/views/` - Carpeta eliminada, componentes movidos a `pages/`
- `src/components/LoginPage.jsx` - Movido a `pages/Login.jsx`
- `src/components/RegisterPage.jsx` - Movido a `pages/Register.jsx`
- `src/components/Cart.jsx` - Movido a `pages/Cart.jsx`
- `src/components/Pizza.jsx` - Movido a `pages/Pizza.jsx`

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
