import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import configureStore from './tools/store/configureStore'
import { getProduct,addProduct } from './tools/actions/productAction';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})





store.dispatch(getProduct());
store.dispatch(addProduct({img:"photo1.jpg",title:"Samsung S25 Ultra",price:3200,desc:"Good phone"}));
store.dispatch(addProduct({img:"photo2.jpg",title:"Xiaomi 15 Pro",price:1700,desc:"Very good phone"}));
store.dispatch(addProduct({img:"photo3.jpg",title:"Oneplus 13",price:2400,desc:"Super phone"}));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
