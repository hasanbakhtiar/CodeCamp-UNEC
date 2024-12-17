
import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import List from './components/List'
import Quantity from './components/Quantity'



class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Quantity />
        {/* <div className="row g-5">
        <List title="Samsung 15" price="3000" />
        <List title="Samsung 16" price="3000" />
        <List title="Samsung 17" price="3000" />
        <List title="Samsung 18" price="3000" />
        <List title="Samsung 19" price="3000" /> 
        </div> */}
      </div>
       
    )
  }
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
