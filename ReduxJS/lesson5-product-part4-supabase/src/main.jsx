import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import configureStore from "./tools/store/configureStore";
import { getProduct } from "./tools/actions/productAction";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import supabase from "./utils/supabase";
const store = configureStore();


const { data } = await supabase.from("product-unec").select();

store.dispatch(getProduct(data));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
