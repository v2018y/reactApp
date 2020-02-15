import React from 'react'
import { SMSForm } from './secure/SMSForm'
import { Card, CardBody } from 'reactstrap'
import { MobileNo } from './config/config'
import SMSService from './service/SMSService'
class Main extends React.Component {

    dataSubmit = (event, errors, values) => {
        console.log(errors, values)
        if(errors.length===0){
            let message=values.userName+" regsiter on "+values.userDate+" "+values.userTabel;
            let bodyData={
                message,
                numbers: MobileNo
            }
            try {
                new SMSService().sendSMS(this.success,this.error,bodyData);
            } catch (error) {
                this.error(error);
            }
        }
    }

    success=(data)=>{
        console.log(data)
    }

    error=(error)=>{
        console.log(error)
    }

    render() {
        return <>
            <Card>
                <CardBody>
                    <SMSForm dataSubmit={this.dataSubmit} />
                </CardBody>
            </Card>
        </>
    }
}

export default Main;