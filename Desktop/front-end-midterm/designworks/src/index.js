import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Messages from './pages/Messages/Messages'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Messages />} />
    </Routes>
  </BrowserRouter>,
)
