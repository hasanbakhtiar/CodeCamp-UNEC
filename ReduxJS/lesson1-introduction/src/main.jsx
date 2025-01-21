import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'


const initialState = {
  count: 0
}
const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
      case "DECREMENT":
        return { count: state.count - 1 }
        case "RESET":
          return { count:  0 }
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());

})




store.dispatch({
  type: "INCREMENT"
})
store.dispatch({
  type: "RESET"
})
store.dispatch({
  type: "DECREMENT"
})




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
