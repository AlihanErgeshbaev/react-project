import React from "react";
import { Route, Routes } from "react-router-dom";

import AddProduct from "./components/AddProduct/AddProduct";
import ProductsList from "./components/ProductsList/ProductsList";
import EditProduct from "./components/EditProduct/EditProduct";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsList />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routing;
