import React from "react";
import { Home, ProductList, Product, Register, Login, Cart } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = true; 
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
          
        
        <Route path="/register" element={<Register />} />
      </Routes>

      
    </Router>
  );
}

export default App;
