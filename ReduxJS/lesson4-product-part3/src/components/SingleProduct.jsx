import React from 'react'
import { Col } from 'react-bootstrap'

const SingleProduct = ({allitems}) => {
    return (
        <Col sm={12} md={4}>
            <div className="card">
                <img src={allitems.img} className="card-img-top" alt={allitems.title} />
                <div className="card-body">
                    <h5 className="card-title">{allitems.title}</h5>
                    <p className="card-text">{allitems.price}</p>
                    <a href="#" className="btn btn-dark">Read more</a>
                </div>
            </div>
        </Col>

    )
}

export default SingleProduct