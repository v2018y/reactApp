import React, { useState } from 'react';
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup } from "reactstrap";
import { Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
// --------------------------------------------------
import * as actionsCre from "../../redux/action/index";
import Config from '../../data/Config';

// This is Login Component Implemented in React Hooks
const Login = (props) => {
    let [loading, setLoading] = useState(false);

    // Handle submit when click on login
    const handelSubmit = async (event, errors, values) => {
        if (errors.length === 0) {
            await setLoading(loading = !loading);
            await props.loadToken(values);
            setTimeout(async () => {
                await props.loadMessage()
                await setLoading(loading = !loading);
            }, Config.API_EXE_TIME)
        }
    }

    // This method loading spiiner
    const loadSpinner = () => { return <Loader type="Oval" color="#00BFFF" height={100} width={100} /> }

    // This is return the login Form
    return <Container>
        <Row className="justify-content-md-center">
            <Col md="auto" style={{ paddingTop: 40 }}>
                <center>{props.color && <Alert variant={props.color} >{props.message}</Alert>}</center>
                <Card >
                    <Card.Header>
                        <center><h3>Login</h3></center>
                    </Card.Header>
                    <Card.Body>
                        <AvForm onSubmit={handelSubmit}>
                            <AvField type="text" name="username" label="Enter UserName" errorMessage="Enter vaild username" placeholder="Ex : v@gmail.com" required />
                            <AvField type="password" name="password" label="Enter Password" errorMessage="Enter vaild password" placeholder="Password" required />
                            <FormGroup> <center><Button type="submit" variant="outline-success">Login</Button></center></FormGroup>
                        </AvForm>
                        <center>{loading && loadSpinner()}</center>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps, actionsCre)(Login);


// This Checking user is logined or not
export const isLogin = (props) => {
    if (props.token !== "") {
        return true;
    } else {
        return false;
    }
}





