import { createStore } from "redux";
import { productReducer } from "../reducers/productReducer";

const configureStore = ()=>{
    const store = createStore(productReducer);
    return store;
}


export default configureStore;