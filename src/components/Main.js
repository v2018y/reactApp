import React,{Component} from 'react'
import { SMSForm } from './secure/SMSForm'
import { Card, CardBody, Col, Alert } from 'reactstrap'
import { MobileNo } from './config/config'
import SMSService from './service/SMSService'
import { Header } from './Header'
import { Footer } from './Footer'
class Main extends Component {

    state={
        color:'',
        message:''
    }

    dataSubmit = (event, errors, values) => {
        console.log(errors, values)
        if (errors.length === 0) {
            let message = "Dear "+values.userName + ",you sucessfully regsiter tabel on " + values.userDate + ",with no of person " + values.noOfPerson;
            let bodyData = {
                message,
                numbers: MobileNo+","+values.userMobileNumber
            }
            try {
                new SMSService().sendSMS(this.success, this.error, bodyData);
            } catch (error) {
                this.error(error);
            }
        }
    }

    success = (data) => {
        this.showAlert('success',"Your tabel sucessfully registeerd.")
    }

    error = (error) => {
        this.showAlert('danger',error)
    }

    showAlert=(color,message)=>{
        this.setState({ color, message });
        setTimeout(() => {
        this.setState({ color: '',message:'' });
        window.location.reload();
        }, 400);
    }

    render() {
        const {message,color}=this.state
        return <>
            <Header />
            <Card>
                <CardBody >
                    <Col sm={{ offset: 2 }}>
                        {color && <Alert color={color}>{message}</Alert>}
                        <SMSForm dataSubmit={this.dataSubmit} />
                    </Col>
                </CardBody>
            </Card>
            <Footer />
        </>
    }
}

export default Main;