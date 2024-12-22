import React, { Component } from 'react'

class Data extends Component{
  componentWillUnmount(){
    alert("elem deleted")
  }
  
  
  render(){
    return(
      <h1>Test</h1>
    )
  }
}


class List extends Component {
  // componentDidMount(){
  //   console.log("componentDidMount running...");
    
  // }
  
  
  // constructor() {
  //   console.log('constructor running...');
    
  //   super();
  //   this.state = {
  //     title: "Samsung S29",
  //     count: 0
  //   }
  // }
  
  // data = 5;
  
  // componentDidUpdate() {
  //   // this.data=10;
  //   document.querySelector('h1').style.color  = 'red';
    
  
  // }; //update
  // // componentWillUnmount() { }; //delete

  constructor(){
    super();
    this.state={
      display:true
    }
  }
  
  

  render() {

    let info;
    if (this.state.display) {
      info = <Data/>;
    }
    
    return (
      <>
      {info}
      <button onClick={()=>{this.setState({
        display:false
      })}}>del</button>
        {/* <ul>
          <li>{this.state.title}</li>
        </ul>

        <div>
          <h1>{this.data}</h1>
          <p>{this.state.count}</p>
          <button onClick={() => {
            this.setState({ count: this.state.count + 1 })
          }}>increment</button>
        </div> */}
      </>
    )
  }
}

export default List