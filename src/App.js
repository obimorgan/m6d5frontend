/** @format */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Productdetails from "./Components/Products/Productdetails";
import CartContainer from "./Components/Cart/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<Productdetails />} />
          <Route path="/cart/:id" element={<CartContainer />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
