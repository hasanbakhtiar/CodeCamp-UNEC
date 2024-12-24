import React from 'react'
import Products from './components/Products'
import { Container } from 'react-bootstrap'
import Counter from './examples/Counter'

const App = () => {
  return (
    <Container>
      {/* <Products /> */}
      <Counter />
    </Container>
  )
}

export default App



// import List from "./components/List"


// const App = () => {
//   return (
//     <div>
//       <List itemOne="Table" itemTwo="Chair"/>
//       <List itemOne="Xiaomi" itemTwo="Samsung"/>
//     </div>
//   )
// }

// export default App