import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { LangProvider } from './context/LangContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </LangProvider>
  </StrictMode>,
)
