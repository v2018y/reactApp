import React from 'react';
import { connect } from 'react-redux';
import FormUI from 'vany-crud-modal';
import * as actionsCre from "../../../action/index";


class Food extends React.Component {


    getFoodData = (token, data) => {
        console.log("Get Data ", data)
        if (token) {
            this.props.loadFood(this.props.token.token)
        }
    }

    // This Method Handel Post Actions for Executing
    handelPostSubmit = (token, data) => {
        console.log("Post Data ", data)
        // if (errors.length === 0) {
        //     this.props.saveFoodData(this.props.token.token, values)
        // }
    }
    // This Method Handel Put Actions for Executing
    handelPutSubmit = (token, data) => {
        console.log("Put Data ", data)
        // if (errors.length === 0) {
        //     this.setState({updateModel: !this.state.updateModel})
        //     console.log("data ",values)
        //     this.props.updateFoodData(this.props.token.token, values)
        // }
    }
    // This Method Handel Delete Actions for Executing
    handelDeleteSubmit = (token, data) => {
        console.log("Delete Data ", data)
        // if (data.length === 0) {
        //     this.setState({deleteModel: !this.state.deleteModel})
        //     this.props.deleteFoodData(this.props.token.token, values)
        // }
    }

    render() {

        const filed = [
            { apiKey: 'foName', label: "Food Name", type: "text", required: true, errorMessage: "Enter Food Name", placeholder: "Ex: Pav Bahji" },
            { apiKey: 'foRate', label: "Food Price", type: "text", required: true, errorMessage: "Enter Food Price", placeholder: "Ex: jony" },
        ]


        return <FormUI
            token={this.props.token.token}
            getMethod={this.getFoodData}
            saveMethod={this.handelPostSubmit}
            updateMethod={this.handelPutSubmit}
            deleteMethod={this.handelDeleteSubmit}
            fields={filed}
            componentName="Food"
            stateData={this.props.foodData}
            primaryKey="foId"
        />
    }

}

const mapToPorps = (state) => {
    return state;
};
export default connect(mapToPorps, actionsCre)(Food);