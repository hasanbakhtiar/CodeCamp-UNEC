import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const SingleCard = ({img,title,price,desc}) => {
    return (
        <Col sm={12} md={4}>
            <Card >
                <Card.Img variant="top" src={img} alt={title} style={{height:"300px",objectFit:"contain"}} />
                <Card.Body>
                    <Card.Title>{title.substring(0,15)}</Card.Title>
                    <Card.Subtitle>${price}</Card.Subtitle>
                    <Card.Text>
                        {desc.substring(0,100)}...
                    </Card.Text>
                    <Button variant="success">Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SingleCard