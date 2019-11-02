import React from 'react';
import { connect } from 'react-redux';
import FormUI from 'vany-crud-modal';
import * as actionsCre from "../../../redux/action/index";

const Food = (props) => {
    // This is Declaring the constant values
    const { token, foodData, color, message } = props
    // The list of fileds in a form
    const filed = [
        { apiKey: 'foName', label: "Food Name", type: "text", required: true, errorMessage: "Enter Food Name", placeholder: "Ex: Pav Bahji" },
        { apiKey: 'foRate', label: "Food Price", type: "text", required: true, errorMessage: "Enter Food Price", placeholder: "Ex: 12" },
    ]
    // This Method Handel Get Actions for Executing
    const getFoodData = (token) => {
        token && props.loadFood(token)
    }
    // This Method Handel Post Actions for Executing
    const handelPostSubmit = (token, data) => {
        data && props.saveFoodData(token, data)
    }
    // This Method Handel Put Actions for Executing
    const handelPutSubmit = (token, data) => {
        data && props.updateFoodData(token, data)
    }
    // This Method Handel Delete Actions for Executing
    const handelDeleteSubmit = (token, data) => {
        data && props.deleteFoodData(token, data)
    }

    return <FormUI
        token={token.token}
        getMethod={getFoodData}
        saveMethod={handelPostSubmit}
        updateMethod={handelPutSubmit}
        deleteMethod={handelDeleteSubmit}
        fields={filed}
        componentName="Food"
        stateData={foodData}
        primaryKey="foId"
        alertColor={color}
        alertMessage={message}
    />

}
// This mapping current Store into state
const mapStateToPorps = (state) => { return state; };

// This connecting the app to Store
export default connect(mapStateToPorps, actionsCre)(Food);