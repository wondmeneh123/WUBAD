import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Seller from "./Screens/Seller";
import Product from "./Screens/Products";
import Customers from "./Screens/Customers";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sellers" element={<Seller />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
