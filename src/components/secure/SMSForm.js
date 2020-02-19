import React from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export const SMSForm = (props) => <AvForm onSubmit={props.dataSubmit}>
    <FormGroup row>
        <Label sm={2}>Enter email</Label>
        <Col sm={10}>
            <AvField type="email" name="email" helpMessage="Ex: admin@admin.com"  placeholder="Enter Your Email" required errorMessage="Please enter valid email"/>
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Enter your name</Label>
        <Col sm={10}>
            <AvField type="text" name="userName" helpMessage="Ex: Jonn" placeholder="Enter Your Name" validate={{
                minLength: {value: 5, errorMessage:" Enter minimum 5 char text"},
                maxLength: {value: 10, errorMessage:" maximum 10 char text Allowed"}
            }} errorMessage="Please enter valid name"  />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Enter your mobile number</Label>
        <Col sm={10}>
            <AvField type="text" name="userMobileNumber" helpMessage="Ex: 9878457885" placeholder="Enter your mobile number" validate={{
                required: {value: true},
                pattern: {value: '^[0-9]+$'},
                minLength: {value: 10},
                maxLength: {value: 10}
            }} errorMessage="Please enter valid mobile number"  />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Select date</Label>
        <Col sm={10}>
            <AvField type="date" name="userDate" helpMessage="Ex: 02/01/1999" required errorMessage="Please select proper date" />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Enter number of person</Label>
        <Col sm={10}>
        <AvField type="text" name="noOfPerson" helpMessage="Ex: 3,4,5......" required errorMessage="Please enter proper number" />
        </Col>
    </FormGroup>
    <FormGroup check row>
        <Col sm={{  offset: 2 }}>
            <Button color="success">Register Your Tabel</Button>
        </Col>
    </FormGroup>
</AvForm>
