import React from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export const SMSForm = (props) => <AvForm onSubmit={props.dataSubmit}>
    <FormGroup row>
        <Label sm={2}>Enter Email</Label>
        <Col sm={10}>
            <AvField type="email" name="email" helpMessage="Ex: admin@admin.com"  placeholder="Enter Your Email" required errorMessage="Please enter valid email"/>
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Enter Your Name</Label>
        <Col sm={10}>
            <AvField type="text" name="userName" helpMessage="Ex: Jonn Mishra" placeholder="Enter Your Name" required errorMessage="Please enter valid name"  />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Select Date</Label>
        <Col sm={10}>
            <AvField type="date" name="userDate" helpMessage="Ex: 02/01/1999" required errorMessage="Please select proper date" />
        </Col>
    </FormGroup>
    <FormGroup row>
        <Label sm={2}>Select Tabel</Label>
        <Col sm={10}>
            <AvField type="select" name="userTabel" helpMessage="Ex: Tabel 1 / Tabel 2" required errorMessage="Please select proper tabel">
                <option>Tabel 1</option>
                <option>Tabel 2</option>
                <option>Tabel 3</option>
                <option>Tabel 4</option>
                <option>Tabel 5</option>
            </AvField>
        </Col>
    </FormGroup>
    <FormGroup check row>
        <Col sm={{  offset: 2 }}>
            <Button color="success">Register Your Tabel</Button>
        </Col>
    </FormGroup>
</AvForm>
