
import React,{ StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import {ListOne, ListTwo} from './List';




class App extends Component {
  render() {
    return (
      <>
      <h1>Hello React JS</h1>
      <ListOne />
      <ListTwo />
      </>
    )
  }
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
