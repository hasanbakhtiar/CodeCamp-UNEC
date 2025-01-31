import Form from "./Form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../tools/actions/productAction";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="container">
            <p className="h1 text-center ">Add Product</p>
            <Form
                comingData={(item) => {
                    dispatch(addProduct(item)), navigate("/dashboard");
                }}
            />
        </div>
    );
};

export default AddProduct;
