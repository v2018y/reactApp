import React from 'react';
import { connect } from 'react-redux';
import * as actionsCre from "../../../action/index";
import { Table, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { AvField, AvForm } from "availity-reactstrap-validation";
import { FormGroup } from "reactstrap";


class Food extends React.Component {

    componentDidMount = () => {
        if (this.props.token) {
            this.props.loadFood(this.props.token.token)
        }
    }
    // This Method Handel Post Method for Calling Actions
    handelPostSubmit = (event, errors, values) => {
        if (errors.length === 0) {
            this.props.saveFoodData(this.props.token.token, values)
        }
    }

    render() {
        return <Container>
                    {this.loadAddFood()}
                    {this.loadFoodTable()}
               </Container>;
    }
    // This Method Load the Adding Food UI
    loadAddFood = (foodRec) => {
        return <Row className="justify-content-md-left">
            <Col >
                <Card >
                    <Card.Body>
                        <AvForm onSubmit={this.handelPostSubmit}>
                            <AvField type="text" name="foName" label="Enter Food Name" value={foodRec ? foodRec.foName : ''} placeholder="Ex: Pav Bahji" errorMessage="Enter Food vaild name" required />
                            <AvField type="number" name="foRate" label="Enter Food Price" value={foodRec ? foodRec.foRate : ''} placeholder="Ex: 20" errorMessage="Enter Food vaild Rate" required />
                            <FormGroup>
                                <Button type="submit" variant="outline-success">Submit</Button> &nbsp; &nbsp;
                                <Button type="button" variant="outline-success">Cancle</Button>
                            </FormGroup>
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
                <td><Button  onClick={()=>this.loadEdit(food.foId)} >Edit</Button></td>
                <td><Button onClick={()=> this.loadDelete(food.foId)}>Delete</Button></td>
            </tr>
        });
        return rows;
    }
    // This Method calling Load edit from
    loadEdit=(foodid)=>{
        console.log("id ",foodid)
        let data= this.props.foodData.filter(data=> data.foId===foodid);
        console.log("Data ",data)
        this.loadAddFood(data);
        this.forceUpdate();
    }
    loadDelete=(foodId)=>{
        console.log("FoodId : ",foodId)
    }
}

const mapToPorps = (state) => {
    return state;
};
export default connect(mapToPorps, actionsCre)(Food);