# 🍕 Pizzería Mamma Mia

Una aplicación web moderna para una pizzería construida con React y Vite.

## 🚀 Características

- **Catálogo de Pizzas**: Visualiza todas las pizzas disponibles con imágenes y precios
- **Carrito de Compras**: Agrega y gestiona tus pedidos
- **Autenticación**: Sistema de login y registro de usuarios
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Navegación Intuitiva**: Fácil navegación entre secciones

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **React Router DOM** - Enrutamiento para aplicaciones React
- **Bootstrap 5** - Framework CSS para diseño responsivo
- **ESLint** - Linter para mantener código limpio

## 📦 Instalación

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
│   ├── CardPizza.jsx   # Tarjeta de pizza individual
│   ├── Cart.jsx        # Componente del carrito
│   ├── Header.jsx      # Encabezado de la aplicación
│   ├── Footer.jsx      # Pie de página
│   ├── Navbar.jsx      # Barra de navegación
│   ├── LoginPage.jsx   # Página de inicio de sesión
│   └── RegisterPage.jsx # Página de registro
├── context/            # Contextos de React
│   └── CartContext.jsx # Contexto del carrito de compras
├── data/               # Datos estáticos
│   └── pizzas.js       # Información de las pizzas
├── views/              # Páginas principales
│   └── Home.jsx        # Página de inicio
├── utils/              # Utilidades
│   └── format.js       # Funciones de formateo
└── assets/             # Recursos estáticos
    └── imgs/           # Imágenes
```

## 🎨 Funcionalidades

### 🍕 Catálogo de Pizzas
- Visualización de todas las pizzas disponibles
- Información detallada: nombre, descripción, precio
- Imágenes atractivas para cada pizza

### 🛒 Carrito de Compras
- Agregar pizzas al carrito
- Modificar cantidades
- Eliminar productos
- Cálculo automático del total

### 👤 Autenticación
- Sistema de registro de nuevos usuarios
- Inicio de sesión
- Gestión de sesiones

## 🚀 Despliegue

Para desplegar en GitHub Pages:

1. Asegúrate de tener `gh-pages` instalado
2. Ejecuta: `npm run deploy`
3. La aplicación estará disponible en: `https://[tu-usuario].github.io/pizzeria-mamma-mia`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ para la pizzería Mamma Mia

---

¡Disfruta de tu pizza! 🍕
