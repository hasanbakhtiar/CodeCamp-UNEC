import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Dashboard from './pages/dashboard/Dashboard';
import AddProduct from "./pages/dashboard/AddProduct";
import EditProduct from "./pages/dashboard/EditProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/add" element={<AddProduct />}></Route>
        <Route path="/dashboard/edit/:slug" element={<EditProduct />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
