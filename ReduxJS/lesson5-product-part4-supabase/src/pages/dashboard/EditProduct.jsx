import React from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {  editProductToDatabase} from "../../tools/actions/productAction";
import slugify from "slugify";
const EditProduct = () => {
  const { slug } = useParams();
  const data = useSelector((p) => p.product);
  const dispatch = useDispatch();
  const filteredData = data.find(
    (p) => slugify(p.title, { lower: true }) === slug
  );

  return (
    <div>
      <p className="h1 text-center ">Edit Product</p>
      <Form
        editData={filteredData}
        comingData={(item) => {
          dispatch(editProductToDatabase(filteredData.id,item));
        }}
      />
    </div>
  );
};

export default EditProduct;
