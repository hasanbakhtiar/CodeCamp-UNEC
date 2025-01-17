import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import slugify from 'slugify';
import Preloader from '../components/Preloader';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { slug } = useParams();
  const data = useContext(ProductContext);

  const findDataByTitle = data.find(p => slugify(p.title, { lower: true }) === slug);







  return (
    <>
      {!findDataByTitle ? <Preloader /> :
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={findDataByTitle.images[0]} className="d-block mx-lg-auto img-fluid" alt={findDataByTitle.title} width={700} height={500} loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{findDataByTitle.title}</h1>
              <p className='h4 text-success'>${findDataByTitle.price}</p>
              <p className="lead">{findDataByTitle.description}</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              
                <Link to={'/products'} className="btn btn-outline-dark btn-lg px-4">Back</Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProductDetails