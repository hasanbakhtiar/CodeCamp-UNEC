import React, { Component } from 'react'

class ProductList extends Component {

    constructor(){
        super();
        this.state={
            product:[]
        }
    }

    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                product:data
            })
        })
    }
    
    
  render() {
    return (
      <div>
        {this.state.product.length===0?<span>Loading...</span>:this.state.product.map((item,i)=>(
            <li key={i}>{item.title}</li>
        ))}
      </div>
    )
  }
}

export default ProductList