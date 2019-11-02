import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { connect } from "react-redux";
// ---------------------------------------------------------
import * as actionsCre from "../redux/action/index";
import { Routes } from "./routes/Routes";
import Login, { isLogin } from "./login/Login";
import NavBar from "./routes/NavBar";

class Main extends Component {

  render() {
    // This condtions checking is user login or not using props
    if (isLogin(this.props)) {
      return this.loadSecureFramework();
    } else {
      return this.loadLogin();
    }
  }

  // This is login form Loading
  loadLogin = () => {
    return <Login />
  }

  // This is loading main Dashborad Sturctres
  loadSecureFramework = () => {
    return <Container className="justify-content-md-center">
      <Row><Col><NavBar /></Col></Row>
      <Row><Col><Routes /></Col></Row>
    </Container>
  };
}
// This is line maping state const variable 
const mapStateToProps = state => { return state; };

// This line passing above maping state to Main Class
export default connect(mapStateToProps, actionsCre)(Main);
