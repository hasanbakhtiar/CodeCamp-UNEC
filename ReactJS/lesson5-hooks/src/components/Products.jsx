import React from 'react'
import { Row } from 'react-bootstrap'
import SingleCard from './SingleCard'
import { product } from '../data/product'

const Products = () => {
  return (
    <>
    <h1 className='text-center my-5'>Product List</h1>
    <Row className='g-5 '>
        {product.map(item=>(
            <SingleCard img={item.image} title={item.title} price={item.price} desc={item.description} />

        ))}
    </Row>

    </>
  )
}

export default Products