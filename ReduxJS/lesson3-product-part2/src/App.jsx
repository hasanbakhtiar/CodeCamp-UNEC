import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Products from "./pages/Products";
import AddProduct from "./pages/dashboard/AddProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/dashbaord" element={<AddProduct />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App