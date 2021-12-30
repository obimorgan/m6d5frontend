/** @format */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import { Container } from "react-bootstrap";
import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from "./Components/Products/Productdetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Productdetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
