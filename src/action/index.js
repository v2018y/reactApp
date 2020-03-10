import axios from "axios"

const API_URL = "http://10.10.10.15:7000"

// ------------------ This is dispath Actions Call any Component
//  1) Load Token
export function loadToken(userData) {
    return (dispatch) => {
        return axios.post(API_URL + "/auth/user/token", {
            userEmail: userData.username,
            userPassword: userData.password
        }).then(response => {
                dispatch(loadMessage('success', 'Login Successfull'))
                dispatch(saveToken(response.data))
        }).catch(err => {
                dispatch(loadMessage('danger', 'Sorry you are not provied vaild credtional'));
        })
    }
}
// 2) Get user
export function loadPayments(token) {
    return (dispatch) => {
        return axios.get(API_URL + "/user/profile/payment/getAll", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            response.data && dispatch(savePayments(response.data));
            }).catch(err => {
                console.log("Error : ", err);
            })
    }
}

// 3) Get Food 
export function loadFood(token) {
    return (dispatch) => {
        return axios.get(API_URL + "/hotel-api/api/foodItem", {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + token
            }
        }).then(
            response => {
                dispatch(saveFood(response.data));
            }).catch(err => {
                console.log("Error : ", err);
            })
    }
}
// 4) Save Food
export function saveFoodData(token, postData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };

    return (dispatch) => {
        return axios.post(API_URL + '/hotel-api/api/foodItem', postData, config)
            .then(response => { dispatch(loadFood(token)) })
            .catch(err => { console.log("Error : ", err) })
    }
}
// 5) Update Food
export function updateFoodData(token, putData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.put(API_URL + '/hotel-api/api/foodItem/' + putData.foId, putData, config)
            .then(response => { dispatch(loadFood(token)) })
            .catch(err => { console.log("Error : ", err) })
    }
}
// 5) Delete Food
export function deleteFoodData(token, delData) {
    var config = {
        headers: { 'Authorization': 'Bearer ' + token }
    };
    return (dispatch) => {
        return axios.delete(API_URL + '/hotel-api/api/foodItem/' + delData.foId, config)
            .then(response => { dispatch(loadFood(token)) })
            .catch(err => { console.log("Error : ", err) })
    }
}



// -------------------------------------------------------------
// This Function Save Token
export function saveToken(token) {
    return {
        type: "TOKEN_CHNAGE",
        token: token.userToken
    }
}
// This functions Save User
export function saveUser(data) {
    return {
        type: "SAVE_USER",
        userData: data
    }
}

// This functions Save User
export function savePayments(data) {
    return {
        type: "SAVE_PAYMENTS",
        payments: data
    }
}
// This is Save Food 
export function saveFood(data) {
    return {
        type: "SAVE_FOOD",
        foodData: data
    }
}
// This functions message
export function loadMessage(color, message) {
    return {
        type: "NOTIFICATIONS",
        color: color,
        message: message
    }
} 