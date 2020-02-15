import React from 'react'
import { SMSForm } from './secure/SMSForm'
import { Card, CardBody, Col, Alert } from 'reactstrap'
import { MobileNo } from './config/config'
import SMSService from './service/SMSService'
import { Header } from './Header'
import { Footer } from './Footer'
class Main extends React.Component {

    dataSubmit = (event, errors, values) => {
        console.log(errors, values)
        if (errors.length === 0) {
            let message = values.userName + " regsiter on " + values.userDate + " " + values.userTabel;
            let bodyData = {
                message,
                numbers: MobileNo
            }
            try {
                new SMSService().sendSMS(this.success, this.error, bodyData);
            } catch (error) {
                this.error(error);
            }
        }
    }

    success = (data) => {
        return <Alert color="primary">{data.message[0]}</Alert>
    }

    error = (error) => {
        return <Alert color="danger">{error}</Alert>
    }

    render() {
        return <>
            <Header />
            <Card>
                <CardBody >
                    <Col sm={{ offset: 2 }}>
                        <SMSForm dataSubmit={this.dataSubmit} />
                    </Col>
                </CardBody>
            </Card>
            <Footer />
        </>
    }
}

export default Main;