import React from 'react';
// import { connect } from 'react-redux';
// import * as actionsCre from "../../../action/index";
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Modal, ModalBody, ModalHeader,ModalFooter } from "reactstrap";


class FormModal extends React.Component {

    state={
        deleteModel : false,
        updateModel : false,
        id : ''
    }

    // This Method Handel GET Actions for Executing
    componentDidMount = () => {
        this.props.getMethod(this.props.token)
    }

    // This Method Handel Post Actions for Executing
    handelPostSubmit = (event, errors, values) => {
        if (errors.length === 0) {
            this.props.saveMethod(this.props.token, values)
        }
    }
    // This Method Handel Put Actions for Executing
    handelPutSubmit=(event, errors, values)=>{
        if (errors.length === 0) {
            this.setState({updateModel: !this.state.updateModel})
            this.props.updateMethod(this.props.token, values)
        }
    }
     // This Method Handel Delete Actions for Executing
    handelDeleteSubmit =(event, errors, values)=>{
        if (errors.length === 0) {
            this.setState({deleteModel: !this.state.deleteModel})
            this.props.deleteMethod(this.props.token, values)
        }
    }

    render() {
        return <Container>
                    {this.loadAddFood()}
                    {this.loadFoodTable()}
                    { (this.state.updateModel ||this.state.deleteModel) && this.loadDelEditModal()}
               </Container>;
    }
    // This Method Load the Adding Food UI
    loadAddFood = () => {
        return <Row className="justify-content-md-left">
            <Col >
                <Card >
                    <Card.Body>
                        <AvForm onSubmit={this.handelPostSubmit}>
                            {this.props.fileds.map((filed,key)=>{
                                return <AvField 
                                type={filed.type} 
                                name={filed.apiKey} 
                                label={filed.filedName && `Enter ${filed.filedName}`} 
                                placeholder= {filed.placeholder && filed.filedName }
                                errorMessage= {filed.errorMessage && filed.errorMessage}
                                required ={FileReader.required && filed.required}
                                />
                            })}
                            <FormGroup> <Button type="submit" variant="outline-success">Save Food Item</Button></FormGroup>
                        </AvForm>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    }
    // This Method Loading Showing Foods
    loadFoodTable = () => {
        return (
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        {this.props.fileds.map((filed,key)=>{
                               return <th>{filed.filedName && filed.filedName}</th> 
                        })}
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                {this.props.stateData.length > 0 && <tbody>{this.loadTabelRows(this.props.stateData)}</tbody>}
            </Table>
        );
    };
    // This method return the no of Rows in load tbeel form API result
    loadTabelRows = (data) => {
        let rows = data.map((food, key) => {
            return <tr key={key}>
                <td>{key}</td>
                <td><Button  onClick={()=>this.setState({ updateModel: !this.state.updateModel,
                    // id: food.foId 
                    })} >Edit</Button></td>
                <td><Button onClick={()=> this.setState({ deleteModel: !this.state.deleteModel,
                    // id: food.foId 
                    })}>Delete</Button></td>
            </tr>
        });
        return rows;
    }
    // This Method Load the Edit and Update Modal for Item
    loadDelEditModal=()=>{
        let data= this.props.stateData.filter(data=> data.foId===this.state.id);
        let headername = this.state.updateModel ? `Edit ${this.props.componentName}`  : `Delete ${this.props.componentName}`;
        let openVarible = this.state.updateModel ? this.state.updateModel : this.state.deleteModel;
        let buttonText=this.state.updateModel ? `Edit ${this.props.componentName}`  : `Delete ${this.props.componentName}`;
        let closeStateVariableName = this.state.updateModel ? {updateModel : !this.state.updateModel} : {deleteModel : !this.state.deleteModel};
        let variantColor= this.state.updateModel ? "outline-success" :"outline-danger";
        let handelMethod = this.state.updateModel ? this.handelPutSubmit : this.handelDeleteSubmit
        return <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              isOpen={openVarible}
            >
            <AvForm onSubmit={handelMethod}>
              <ModalHeader>
                <strong id="contained-modal-title-vcenter"> {headername} </strong>
              </ModalHeader>
              <ModalBody>
                    <Row>
                        <AvField type="hidden" name="foId" value={data[0].foId}   required /> 
                        {this.props.fileds.map((filed,key)=>{
                                return <AvField 
                                type={filed.type} 
                                name={filed.apiKey} 
                                label={filed.filedName && `Enter ${filed.filedName}`} 
                                placeholder= {filed.placeholder && filed.filedName }
                                errorMessage= {filed.errorMessage && filed.errorMessage}
                                required ={FileReader.required && filed.required}
                                />
                        })}   
                    </Row>    
              </ModalBody>
              <ModalFooter>
                <Button type="submit" variant={variantColor}>{buttonText}</Button> &nbsp; &nbsp;
                <Button onClick={() => { this.setState(closeStateVariableName)}}>Close</Button>
              </ModalFooter>
              </AvForm>
            </Modal>
            
    }
}

export default FormModal;