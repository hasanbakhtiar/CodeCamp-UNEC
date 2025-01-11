import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Home from './pages/Home'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './layout/Footer'
import { Container } from 'react-bootstrap'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/product/:slug' element={<ProductDetails />}></Route>
          <Route path='*' element={<NotFoundPage />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App