import React from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Switch, Route, Link } from 'react-router-dom'
import { FormGroup } from "reactstrap";
import { Button, Card, Container, Row, Col, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
// ---------------------------------------------------------
import * as actionsCre from "../action/index";
import Home from "./secure/Home";
import Customer from "./secure/customer/Customer";
import CustomerFrom from "./secure/customer/CustomerForm";
import Food from "./secure/food/Food";
import FoodForm from "./secure/food/FoodFrom";

class Main extends React.Component {
  // this functions handel the login
  handelSubmit = (event, errors, values) => {
    if (errors.length === 0) {
      this.props.loadToken(values.username, values.password);
    }
  };

  render() {
    if (this.props.token) {
      return this.loadFramework();
    }
    return this.loadLoginForm();
  }

  // This functions loadin login from
  loadLoginForm = () => {
    return <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" style={{paddingTop:40}}    >
            <Card >
              <Card.Header>
                <center><h3>Login</h3></center>
              </Card.Header>
              <Card.Body>
                <AvForm onSubmit={this.handelSubmit}>
                  <AvField type="text" name="username" label="UserName" placeholder="Ex : v@gmail.com" required/>
                  <AvField type="password" name="password" label="Password" placeholder="Password" required/>
                  <FormGroup> <center><Button type="submit" variant="outline-success">Login</Button></center></FormGroup>
                </AvForm>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  };

  // This is Routing Methods
  loadFramework = () => {
    return <Container>
          <Row><Col>{this.loadNavBar()}</Col></Row>
          <Row><Col>{this.loadRoutes()}</Col></Row>
        </Container>
  };

  // This Functions load Routes path with component
  loadRoutes=()=>{
    return <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/customer" component={Customer}></Route>
              <Route path="/customer/add" component={CustomerFrom}></Route>
              <Route path="/food" component={Food}></Route>
              <Route path="/food/add" component={FoodForm}></Route>
          </Switch>
  }

  // This functions loading navbar 
  loadNavBar=()=>{
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

}


const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionsCre
)(Main);
