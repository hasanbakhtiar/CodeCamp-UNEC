import { v4 as uuidv4 } from 'uuid';


export const getProduct = ()=>({
    type: "GET_PRODUCT"
  })
export const addProduct = ({img,title,price,desc})=>({
  type:"ADD_PRODUCT",
  payload:{
    id:uuidv4(),
    img,title,price,desc
  }
})

export const removeProduct = (id)=>({
  type:"REMOVE_PRODUCT",
  id
})
