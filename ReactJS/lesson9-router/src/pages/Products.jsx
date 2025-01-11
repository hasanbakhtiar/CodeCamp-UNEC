import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import Preloader from '../components/Preloader';
import SingleCard from '../components/SingleCard';

const Products= () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then(res=>setData(res.data.products))
  },[])
  return (
    <>
     <p className='h1 text-center my-5'>Product List</p> 
      <Row className='g-3'>
        {data.length===0?<Preloader />:data.map(item=><SingleCard key={item.id} img={item.images[0]} title={item.title} price={item.price} desc={item.description} />)}

      </Row>
    </>
  )
}

export default Products