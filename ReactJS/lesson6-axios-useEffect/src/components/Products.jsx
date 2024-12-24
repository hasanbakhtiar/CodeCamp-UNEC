import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from './SingleCard'
import axios from 'axios';

const Products = () => {
const [product,setProduct] = useState([]);
  useEffect(()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
  },[])
  
  
  return (
    <>
    <h1 className='text-center my-5'>Product List</h1>
    <Row className='g-5 '>
        {product.length===0?<p>Loading...</p>:product.map(item=>(
            <SingleCard key={item.id} img={item.image} title={item.title} price={item.price} desc={item.description} />

        ))}
    </Row>

    </>
  )
}

export default Products