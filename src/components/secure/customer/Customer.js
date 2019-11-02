import React from "react";
import FormUI from 'vany-crud-modal';
import { connect } from 'react-redux';
import * as actionsCre from "../../../redux/action/index";

class Customer extends React.Component {
  state={
    customerData:[]
  }

render(){
    const filed=[
        {apiKey:'cName',label:"Customer Name",type:"text",required:true,errorMessage:"Enter Customer Name",placeholder:"Ex: vishva"},
        {apiKey:'cSurname',label:"cSurname ",type:"text",required:true,errorMessage:"Enter Customer Surname",placeholder:"Ex: jony"},
        {apiKey:'cEmail',label:"Customer Email",type:"text",required:true,errorMessage:"Enter Customer Email",placeholder:"Ex: admin@admin.com"}
    ]

    return <FormUI 
    token={this.props.token.token} 
    getMethod={this.getCust}
    saveMethod={this.saveCust}
    updateMethod={this.updateCust}
    deleteMethod={this.deleteCust}
    fields={filed}
    componentName="Customer"
    stateData={this.state.customerData}
    primaryKey="cuId"
    />
}
getCust=(token,data)=>{
    console.log("token : ",token," Data : ",data);
}

saveCust=(token,data)=>{
    console.log("token : ",token," Data : ",data);
}

updateCust=(token,data)=>{
    console.log("token : ",token," Data : ",data);
}

deleteCust=(token,data)=>{
    console.log("token : ",token," Data : ",data);
}
}
const mapToporps =(state)=>{
    return state;
};
export default connect(mapToporps,actionsCre)(Customer);
