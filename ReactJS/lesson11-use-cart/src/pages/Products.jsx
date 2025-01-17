import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Preloader from '../components/Preloader';
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext';
import StaticLang from '../utils/StaticLang';

const Products = () => {
  const data = useContext(ProductContext);
  const [category,setCategory] = useState([]);
  const [filtered,setFiltered] = useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then(res=>setCategory(res.data));
  },[])

  const filteredData =(cat)=>{
    const filterProduct = data.filter(p=>p.category == cat.toLowerCase());
    setFiltered(filterProduct);
    console.log(filterProduct);
    
    
  }
  
  
  return (
    <>
      <p className='h1 text-center my-5'><StaticLang az="Məhsulların Siyahısı" en="Product List" /></p>

      <Row className='g-3'>
        <Col sm={12} md={3}>
          <ul className="list-group">
            {category.map((item,index)=>(
              <li className="list-group-item" key={index} onClick={()=>{filteredData(item.name)}}>{item.name}</li>
            ))}
          </ul>
        </Col>
        <Col sm={12} md={9}>
          <Row className='g-3'>
            {data.length === 0 ? <Preloader /> : filtered.length===0 ? data.map(item => <SingleCard alldata={item} key={item.id} img={item.images[0]} title={item.title} price={item.price} desc={item.description} />):filtered.map(item => <SingleCard alldata={item} key={item.id} img={item.images[0]} title={item.title} price={item.price} desc={item.description} />)}
          </Row>
        </Col>

      </Row>
    </>
  )
}

export default Products