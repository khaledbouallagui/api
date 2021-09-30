import React from "react";
import { ButtonGroup, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <ButtonGroup variant="outline-info">Search</ButtonGroup>
        </Form>
      </Navbar>
      

    </div>
  );
};

export default Navigation;
