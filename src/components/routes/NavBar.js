import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Nav, Navbar, Form, FormControl} from "react-bootstrap";

const NavBar=()=>{
    return <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <Nav.Link> <Link to="/home">Home</Link></Nav.Link>
      <Nav.Link> <Link to="/customer">Customer</Link></Nav.Link>
      <Nav.Link> <Link to="/food">Food</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
}
export default NavBar;