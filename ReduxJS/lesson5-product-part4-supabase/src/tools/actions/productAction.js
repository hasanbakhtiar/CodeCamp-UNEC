import { v4 as uuidv4 } from "uuid";
import supabase from "../../utils/supabase";

export const getProduct = (products) => ({
  type: "GET_PRODUCT",
  products,
});

export const addProductToDatabase = async (product) => {
  const { data, error } = await supabase.from("product-unec").insert(product);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};

export const editProductToDatabase = async (id, product) => {
  const { data, error } = await supabase
    .from("product-unec")
    .update(product)
    .eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};

export const deleteProductToDatabase = async (id) => {
  const { data, error } = await supabase
    .from("product-unec")
    .delete()
    .eq("id", id);
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.assign("/dashboard");
  }
};
