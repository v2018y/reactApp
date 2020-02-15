import React from 'react'
import { SMSForm } from './secure/SMSForm'
import { Card, CardBody } from 'reactstrap'
class Main extends React.Component {

    dataSubmit = (event, errors, values) => {
        console.log(errors, values)
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