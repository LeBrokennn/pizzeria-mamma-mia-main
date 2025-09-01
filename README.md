# 🍕 Pizzería Mamma Mía - Hito 1

Proyecto desarrollado en **React + Vite + Bootstrap** como parte del Hito 1 del curso.  
Este proyecto implementa una primera versión de la aplicación de la pizzería **Mamma Mía**, con componentes reutilizables, props y un layout básico.

Puedes visitar el sitio en https://lebrokennn.github.io/pizzeria-mamma-mia-main/

---

## 🚀 Tecnologías utilizadas
- [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- JavaScript (ES6+)
- CSS personalizado
- Formato de números en CLP con `Intl.NumberFormat`

---

## 📂 Estructura del proyecto
```pizzeria-mamma-mia/
├─ public/
│ └─ pizza.png # favicon personalizado
├─ src/
│ ├─ assets/ # imágenes (ej: hero.jpg)
│ ├─ components/ # componentes reutilizables
│ │ ├─ Navbar.jsx
│ │ ├─ Footer.jsx
│ │ ├─ Header.jsx
│ │ └─ CardPizza.jsx
│ ├─ views/
│ │ └─ Home.jsx
│ ├─ utils/
│ │ └─ format.js # función para formatear CLP
│ ├─ App.jsx
│ ├─ main.jsx
│ └─ index.css
├─ index.html
├─ package.json
└─ vite.config.js


## 🖼️ Funcionalidades implementadas en este hito

| Componente     | Funcionalidad |
|----------------|---------------|
| **Navbar.jsx** | 🍕 Siempre muestra 🛒; 🔑 ; 💲 |
| **Header.jsx** | 🖼️ Sección **hero** con imagen de fondo, título y subtítulo centrados |
| **Home.jsx**   | 🏠 Renderiza el `Header` y 3 tarjetas de pizzas (`CardPizza`) |
| **CardPizza.jsx** | 🍕 Muestra nombre, ingredientes, precio y botones |
| **Footer.jsx** | 📜 Texto centrado: `© 2025 - Pizzería Mamma Mía! - Todos los derechos reservados` |
