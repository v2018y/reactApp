import React from 'react';
import { connect } from 'react-redux';
import FormUI from 'vany-crud-modal';
import * as actionsCre from "../../../redux/action/index";
class Food extends React.Component {
     // This Method Handel Get Actions for Executing
    getFoodData = (token) => {
        token &&  this.props.loadFood(token)
    }
    // This Method Handel Post Actions for Executing
    handelPostSubmit = (token, data) => {
        data &&  this.props.saveFoodData(token, data)
    }
    // This Method Handel Put Actions for Executing
    handelPutSubmit = (token, data) => {
        data &&  this.props.updateFoodData(token, data)
    }
    // This Method Handel Delete Actions for Executing
    handelDeleteSubmit = (token, data) => {
        data &&  this.props.deleteFoodData(token, data)
    }

    render() {
        const { token, foodData, color, message }=this.props
        const filed = [
            { apiKey: 'foName', label: "Food Name", type: "text", required: true, errorMessage: "Enter Food Name", placeholder: "Ex: Pav Bahji" },
            { apiKey: 'foRate', label: "Food Price", type: "text", required: true, errorMessage: "Enter Food Price", placeholder: "Ex: jony" },
        ]
        return <FormUI
            token={token.token}
            getMethod={this.getFoodData}
            saveMethod={this.handelPostSubmit}
            updateMethod={this.handelPutSubmit}
            deleteMethod={this.handelDeleteSubmit}
            fields={filed}
            componentName="Food"
            stateData={foodData}
            primaryKey="foId"
            alertColor={color}
            alertMessage={message}
        />
    }
}

const mapStateToPorps = (state) => {
    return state;
};
export default connect(mapStateToPorps, actionsCre)(Food);