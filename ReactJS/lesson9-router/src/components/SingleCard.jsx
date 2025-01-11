import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const SingleCard = ({img,title,price,desc}) => {
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
          <button className="btn btn-warning ms-3">Add to cart</button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleCard