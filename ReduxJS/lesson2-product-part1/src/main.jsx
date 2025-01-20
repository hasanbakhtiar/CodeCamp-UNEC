import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import configureStore from './tools/store/configureStore'
import { getProduct } from './tools/actions/productAction';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})





store.dispatch(getProduct())



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
