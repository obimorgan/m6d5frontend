/** @format */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import { Container } from "react-bootstrap";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
