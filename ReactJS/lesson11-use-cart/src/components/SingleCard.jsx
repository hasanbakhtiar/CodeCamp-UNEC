import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import slugify from 'slugify'
import Swal from 'sweetalert2'

const SingleCard = ({img,title,price,desc,alldata}) => {
  const { addItem } = useCart();

  const addToCart = (data)=>{
    Swal.fire({
      title: "Product add to cart!",
      icon: "success",
      confirm:addItem(data)
    });
  }
  return (
    <Col sm={12} md={4}>
      <Card>
        <Card.Img style={{"height":"300px",objectFit:"contain"}} variant="top" src={img} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>${price}</Card.Subtitle>
          <Card.Text>
            {desc}
          </Card.Text>
          <Link to={`/product/${slugify(title,{lower:true})}`} className="btn btn-dark">More details</Link>
          <button onClick={()=>{addToCart(alldata)}} className="btn btn-warning ms-3">Add to cart</button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleCard