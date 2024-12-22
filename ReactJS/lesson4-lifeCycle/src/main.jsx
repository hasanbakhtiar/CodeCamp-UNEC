
import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import App from './App'




createRoot(document.getElementById('root')).render(
  <div className='container'>
    <App />
  </div>,
)
