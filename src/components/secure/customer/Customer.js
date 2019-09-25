import React from "react";
import { Table } from "react-bootstrap";
import {connect} from 'react-redux';
import * as actionsCre from "../../../action/index";

class Customer extends React.Component {

 componentDidMount=()=>{
    if(this.props.token){ 
        this.props.loadUser(this.props.token.token)
    }
 }

  render() {
    return this.loadCustomerTable();
  }

  loadCustomerTable = () => {
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  };
}
const mapToporps =(state)=>{
    return state;
};
export default connect(mapToporps,actionsCre)(Customer);
