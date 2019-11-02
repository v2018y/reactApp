import React from 'react';
import {Redirect, Route} from 'react-router-dom'

export const PrivateRoute=({component : Component,...rest})=>{
    console.log("Props ",rest)
  return <Route
    {...rest}
    render={props=>
     props.token ? (<Component {...props} />)
     :(
         <Redirect
         to={{
             pathname:"/login",
             state:{from: props.location}
         }}
         />
     )
    }
    />
}