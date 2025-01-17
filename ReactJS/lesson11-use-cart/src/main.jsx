import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import { ProductProvider } from './context/ProductContext';
import { LangProvider } from './context/LangContext';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from 'react-use-cart';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider>
        <LangProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </LangProvider>
      </ThemeProvider>
    </CartProvider>
  </StrictMode>,
)
