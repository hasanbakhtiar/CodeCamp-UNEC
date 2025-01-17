import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children})=>{
    const [data,setData] = useState([]);
      useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then(res=>setData(res.data.products))
      },[])
      
    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}

