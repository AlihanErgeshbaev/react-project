import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import CartContextProvider from "./context/cartContex";
import ProductsContextProvider from "./context/productsContexts";
import Routing from "./Routing";

const App = () => {
  return (
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  );
};

export default App;
