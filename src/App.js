import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Stats from "./Stats";
import Admin from "./Admin";
import Nav from "./Nav";
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/home" exact={true} element={<Home />} />
          <Route path="/admin" exact={true} element={<Admin />} />
          <Route path="/stats" exact={true} element={<Stats />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
