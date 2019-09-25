import axios from "axios"

const API_URL = "http://vanyzuulapigateway.herokuapp.com"

// ------------------ This is dispath Actions Call any Component
//  1) Load Token
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
// 2) Get user
export function loadUser(token) {
    return (dispatch) => {
        return axios.get(API_URL + "/hotel-api/api/user",{headers: {
            'Authorization': 'Bearer '+token
        }}).then(
            response => {
                dispatch(saveUser(response.data));
            }).catch(err=>{
                console.log("Error : ",err);
            })
    }
}


// -------------------------------------------------------------
// This Function Save Token
export function saveToken(token) {
    return {
        type: "TOKEN_CHNAGE",
        token: token
    }
}
// This functions Save User
export function saveUser(data) {
    return {
        type: "SAVE_USER",
        userData: data
    }
}

