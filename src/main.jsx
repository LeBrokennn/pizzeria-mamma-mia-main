// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import LoginPage from './components/LoginPage.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
