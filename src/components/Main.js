import React from 'react'
import { AvField, AvForm } from 'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import {connect} from 'react-redux'
import * as actionsCre from '../action/index'

class Main extends React.Component {

    handelSubmit=(event,errors,values)=>{
        if(errors.length === 0){
            this.props.loadToken(values.username,values.password)
        }
    }
    
    render() { 
        if(this.props.token){
            return <h1> Hi Fi Your Token Geting SuccessFull</h1>
        }
        return this.loadLoginForm()
    }

    loadLoginForm=()=>{
        return <AvForm onSubmit={this.handelSubmit} >
            <AvField type="text" name="username" label="UserName" required/> <br/>
            <AvField type="password" name="password" label="password" required/><br/>
            <FormGroup>
            <Button>Submit</Button> &nbsp;&nbsp;
            <Button type="button">Cancle</Button>
          </FormGroup>
        </AvForm>
        
    }
}

const mapStateToProps=(state)=>{
    return state
}
 
export default  connect(mapStateToProps,actionsCre)(Main);