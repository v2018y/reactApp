import React from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export const SMSForm = (props) => <AvForm onSubmit={props.dataSubmit}>
    <FormGroup row>
        <Label sm={2}>Enter Email</Label>
        <Col sm={10}>
            <AvField type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Enter Your Name</Label>
        <Col sm={10}>
            <AvField type="text" name="userName" id="examplePassword" placeholder="Enter Your Name" />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Select Date</Label>
        <Col sm={10}>
            <AvField type="date" name="userDate" placeholder="Enter Your Name" />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Select Tabel</Label>
        <Col sm={10}>
            <AvField type="select" name="userTabel" helpMessage="Select the tabel for registrations!">
                <option>Tabel 1</option>
                <option>Tabel 2</option>
                <option>Tabel 3</option>
                <option>Tabel 4</option>
                <option>Tabel 5</option>
            </AvField>
        </Col>
    </FormGroup>
    <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
            <Button>Data Submit</Button>
        </Col>
    </FormGroup>
</AvForm>
