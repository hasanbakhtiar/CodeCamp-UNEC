import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import configureStore from "./tools/store/configureStore";
import { getProduct, addProduct } from "./tools/actions/productAction";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import  supabase  from "./utils/supabase";
const store = configureStore();

store.dispatch(getProduct());

async function getTodos() {
  const { data } = await supabase.from("product-unec").select();
  store.dispatch(addProduct({img:data[0].img,title:data[0].title}));
}

getTodos();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
