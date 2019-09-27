import React from 'react';
import { connect } from 'react-redux';
import * as actionsCre from "../../../action/index";
import { Table, Button } from 'react-bootstrap';


class Food extends React.Component {

    componentDidMount = () => {
        if (this.props.token) {
            this.props.loadFood(this.props.token.token)
        }
    }
    render() {
        return this.loadFoodTable();
    }


    loadFoodTable = () => {
        return (
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th colSpan={2}></th>
                    </tr>
                </thead>
                {this.props.foodData.length >0 ? <tbody>{this.loadTabelRows()}</tbody> : ''}
            </Table>
        );
    };

    loadTabelRows=(foodItem)=>{
        let rows= foodItem.map((food,key)=>{
            return <tr>
            <td>{key}</td>
            <td>{food.foName}</td>
            <td>{food.foRate}</td>
            <td><Button ></Button></td>
            <td><Button ></Button></td>
        </tr>
        });
        return rows;
    }
}

const mapToporps = (state) => {
    return state;
};
export default connect(mapToporps, actionsCre)(Food);