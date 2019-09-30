import React from "react";
import FormModal from '../data/formModel';
import { connect } from 'react-redux';
import * as actionsCre from "../../../action/index";

class Customer extends React.Component {
  state={
    customerData:[]
}

render(){
    const filed=[
        {apiKey:'cName',filedName:"Customer Name",type:"text",required:'required',errorMessage:"Enter Customer Name",placeholder:"Ex: vishva"},
        {apiKey:'cSurname',filedName:"cSurname ",type:"text",required:'required',errorMessage:"Enter Customer Surname",placeholder:"Ex: jony"},
        {apiKey:'cEmail',filedName:"Customer Email",type:"text",required:'required',errorMessage:"Enter Customer Email",placeholder:"Ex: admin@admin.com"}
    ]

    return <FormModal 
    token={this.props.token.token} 
    getMethod={this.getCust}
    saveMethod={this.saveCust}
    updateMethod={this.updateCust}
    deleteMethod={this.deleteCust}
    fileds={filed}
    componentName="Customer"
    stateData={this.state.customerData}
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
