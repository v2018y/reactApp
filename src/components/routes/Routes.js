import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Login from "../login/Login"
import Home from "../secure/Home"
import Customer from "../secure/customer/Customer"
import Food from "../secure/food/Food"
import { PrivateRoute } from "./PrivateRoute"
import Signout from '../login/Signout';


// This is Routing of projects 
export const Routes =()=>{
   return <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signout" component={Signout} />
    <PrivateRoute exact path="/" component={Home} />
    <PrivateRoute path="/home" component={Home} />
    <PrivateRoute path="/customer" component={Customer}/>
    <PrivateRoute path="/food" component={Food} />
  </Switch>
}