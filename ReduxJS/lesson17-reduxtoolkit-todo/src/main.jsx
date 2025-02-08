import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDo from './ToDo'
import { Provider } from 'react-redux';
import store from './tools/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ToDo />
    </Provider>
  </StrictMode>,
)
