import axios from "axios"

const API_URL = "http://vanyzuulapigateway.herokuapp.com"

export function loadToken(username,password) {
    return (dispatch) => {
        return axios.post(API_URL + "/oauth/token",{
            username: username,
            password: password
        }).then(
            response => {
                dispatch(saveToken(response.data));
            }).catch(err=>{
                console.log("Error : ",err);
            })
    }
}

export function saveToken(token) {
    console.log("Res ", token);
    return {
        type: "TOKEN_CHNAGE",
        token: token
    }
}