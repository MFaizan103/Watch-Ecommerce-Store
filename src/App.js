import React from "react";
import { Header } from "./components/Header/Header";
// import { Sections } from "./components/Sections";
import "./App.css";
import { Products } from "./components/Products/Products";
import { Route, Routes } from "react-router-dom";
import { ProductsDetails } from "./components/Products/Product Details/ProductsDetails";
import { Cart } from "./components/Cart/Cart";
import { Home } from './components/Home/Home';
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/user" element={<User />} /> */}
      </Routes>
    </div>
  );
}

export default App;
