import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import store from '../../redux/store/Store'

export const PrivateRoute = ({ component: Component,path, ...rest }) => {
    // grab current state 
    const state = store.getState();
    return <Route
        path={path}
        {...rest}
        render={props =>{
            // This conditions checking in store token save or not
            return state.token !== "" ? <Component {...props} />
                : <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
            }}
        />
}