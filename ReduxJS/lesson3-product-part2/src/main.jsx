import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import configureStore from './tools/store/configureStore'
import { getProduct, addProduct } from './tools/actions/productAction';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const store = configureStore();


store.dispatch(getProduct());
store.dispatch(addProduct({ img: "https://i.gadgets360cdn.com/large/samsung_galaxy_s25_ultra_1737554197996.jpg", title: "Samsung S25 Ultra", price: 3200, desc: "Good phone" }));

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
