import React from 'react';
import { connect } from 'react-redux';
import * as actionsCre from "../../../action/index";
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup, Modal, ModalBody, ModalHeader,ModalFooter } from "reactstrap";


class Food extends React.Component {

    state={
        deleteModel : false,
        updateModel : false,
        id : ''
    }

    componentDidMount = () => {
        if (this.props.token) {
            this.props.loadFood(this.props.token.token)
        }
    }
    // This Method Handel Post Actions for Executing
    handelPostSubmit = (event, errors, values) => {
        if (errors.length === 0) {
            this.props.saveFoodData(this.props.token.token, values)
        }
    }
    // This Method Handel Put Actions for Executing
    handelPutSubmit=(event, errors, values)=>{
        if (errors.length === 0) {
            this.setState({updateModel: !this.state.updateModel})
            let newData={
                ...values,
                foId: this.state.id
            }
            this.props.updateFoodData(this.props.token.token, newData)
        }
    }
     // This Method Handel Delete Actions for Executing
    handelDeleteSubmit =(event, errors, values)=>{
        if (errors.length === 0) {
            this.setState({deleteModel: !this.state.deleteModel})
            let newData={
                ...values,
                foId: this.state.id
            }
            this.props.deleteFoodData(this.props.token.token, newData)
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
                            <AvField type="text" name="foName" label="Enter Food Name" placeholder="Ex: Pav Bahji" errorMessage="Enter Food vaild name" required />
                            <AvField type="number" name="foRate" label="Enter Food Price" placeholder="Ex: 20" errorMessage="Enter Food vaild Rate" required />
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
                        <th>Food Name</th>
                        <th>Food Rate</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                {this.props.foodData.length > 0 ? <tbody>{this.loadTabelRows(this.props.foodData)}</tbody> : ''}
            </Table>
        );
    };
    // This method return the no of Rows in load tbeel form API result
    loadTabelRows = (foodItem) => {
        let rows = foodItem.map((food, key) => {
            return <tr key={key}>
                <td>{key}</td>
                <td>{food.foName}</td>
                <td>{food.foRate}</td>
                <td><Button  onClick={()=>this.setState({ updateModel: !this.state.updateModel,id: food.foId })} >Edit</Button></td>
                <td><Button onClick={()=> this.setState({ deleteModel: !this.state.deleteModel,id: food.foId })}>Delete</Button></td>
            </tr>
        });
        return rows;
    }
    // This Method Load the Edit and Update Modal for Item
    loadDelEditModal=()=>{
        let data= this.props.foodData.filter(data=> data.foId===this.state.id);
        let headername = this.state.updateModel ? "Edit Food Item" : "Delete Food Item";
        let openVarible = this.state.updateModel ? this.state.updateModel : this.state.deleteModel;
        let buttonText=this.state.updateModel ? "Edit Food Item" : "Delete Food Item";
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
                        <Col><AvField type="text" name="foName" label="Enter Food Name" value={data[0].foName} placeholder="Ex: Pav Bahji" errorMessage="Enter Food vaild name" required /></Col>
                        <Col> <AvField type="number" name="foRate" label="Enter Food Price" value={data[0].foRate} placeholder="Ex: 20" errorMessage="Enter Food vaild Rate" required /></Col>
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

const mapToPorps = (state) => {
    return state;
};
export default connect(mapToPorps, actionsCre)(Food);