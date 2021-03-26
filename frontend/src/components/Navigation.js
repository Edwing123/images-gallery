import React from "react";
import { Navbar } from "react-bootstrap";

const Navigation = ({ title }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
