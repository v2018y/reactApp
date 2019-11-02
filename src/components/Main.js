import React from "react";
import { AvField, AvForm } from "availity-reactstrap-validation";
import { Switch, Route, Link } from 'react-router-dom'
import { FormGroup } from "reactstrap";
import { Button, Card, Container, Row, Col, Nav, Navbar, Form, FormControl, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
// ---------------------------------------------------------
import * as actionsCre from "../redux/action/index";
import Home from "./secure/Home";
import Food from "./secure/food/Food";
import Customer from "./secure/customer/Customer";
import { PrivateRoute } from "./routes/PrivateRoute";

class Main extends React.Component {
  state = {
    loading: false,
    color: '',
    message: ''
  }
  // this functions handel the login
  handelSubmit = (event, errors, values) => {
    if (errors.length === 0) {
      this.setState({ loading: !this.state.loading })
      this.props.loadToken(values.username, values.password);
    }
  };

  
  render() {
    if (this.props.token && !this.props.color) {
      return this.loadFramework();
    }
    return this.loadLoginForm();
  }



  // This method loading spiiner
  loadSpinner = () => {
    return <Loader type="Oval" color="#00BFFF" height={100} width={100} />
  }
  // This method show message
  loadMessage = (color, message) => {
    return <Alert variant={color}>{message}</Alert>
  }

  // This functions loadin login from
  loadLoginForm = (color, message) => {
    if (this.props.color) {
      setTimeout(() => {
        this.props.loadMessage()
        this.setState({ loading: false })
      }, 2000)
    }
    return <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" style={{ paddingTop: 40 }}    >
          <Card >
            <Card.Header>
              <center><h3>Login</h3></center>
            </Card.Header>
            <center>{this.props.color && this.loadMessage(this.props.color, this.props.message)}</center>
            <Card.Body>
              <AvForm onSubmit={this.handelSubmit}>
                <AvField type="text" name="username" label="Enter UserName" errorMessage="Enter vaild username" placeholder="Ex : v@gmail.com" required />
                <AvField type="password" name="password" label="Enter Password" errorMessage="Enter vaild password" placeholder="Password" required />
                <FormGroup> <center><Button type="submit" variant="outline-success">Login</Button></center></FormGroup>
              </AvForm>
              <center>{this.state.loading && this.loadSpinner()}</center>
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
  loadRoutes = () => {
    return <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/home" component={Home} />
      <Route path="/customer" component={Customer}></Route>
      <Route path="/food" component={Food}></Route>
    </Switch>
  }

  // This functions loading navbar 
  loadNavBar = () => {
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
