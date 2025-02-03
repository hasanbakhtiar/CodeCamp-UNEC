import Form from "./Form";
import { useDispatch } from "react-redux";
import {  addProductToDatabase} from "../../tools/actions/productAction";
const AddProduct = () => {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <p className="h1 text-center ">Add Product</p>
            <Form
                comingData={(item) => {
                    dispatch(addProductToDatabase(item))
                }}
            />
        </div>
    );
};

export default AddProduct;
