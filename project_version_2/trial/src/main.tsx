import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Trial from './App.tsx'
import Info from './pages/Info.tsx'
import Signup from './pages/Signup.tsx'
import Login from './pages/Login.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'




createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<ProtectedRoute element={<Trial />} />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
