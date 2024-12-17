import React, { Component } from 'react'

class Quantity extends Component {
    constructor(){
        super();
        this.increment = this.increment.bind(this);
        this.state={
            count:0
        }
    }
    

    increment(){
        this.setState({
            count:this.state.count+1
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    
  render() {
    return (
      <div>
        <button className='btn btn-danger' onClick={this.decrement}>-</button>
        <span className='mx-3'>{this.state.count}</span>
        <button className='btn btn-success' onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default Quantity