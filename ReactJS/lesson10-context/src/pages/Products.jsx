import axios from 'axios';
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import Preloader from '../components/Preloader';
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductContext';
import { LangContext } from '../context/LangContext';
import StaticLang from '../utils/StaticLang';

const Products= () => {
  const data = useContext(ProductContext);
  return (
    <>
     <p className='h1 text-center my-5'><StaticLang az="Məhsulların Siyahısı" en="Product List"/></p> 
      <Row className='g-3'>
        {data.length===0?<Preloader />:data.map(item=><SingleCard key={item.id} img={item.images[0]} title={item.title} price={item.price} desc={item.description} />)}

      </Row>
    </>
  )
}

export default Products