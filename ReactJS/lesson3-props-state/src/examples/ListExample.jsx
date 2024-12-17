import React, { Component } from 'react'
import gnomePic from './assets/img/one.png'
 class ListExample extends Component {
  render() {
    return (
      <div>
        <h1 className='my-color'>Hello ListExample</h1>
        <h2 style={{color:"red",fontSize:"30px"}}>Hello Mello</h2>
        <img src={gnomePic} alt="" />
      </div>
    )
  }
}

export default ListExample