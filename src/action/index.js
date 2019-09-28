import axios from "axios"

const API_URL = "http://vanyzuulapigateway.herokuapp.com"

// ------------------ This is dispath Actions Call any Component
//  1) Load Token
export function loadToken(username,password) {
    return (dispatch) => {
        return axios.post(API_URL + "/oauth/token",{
            username: username,
            password: password
        })
        .then(response => { 
            dispatch(loadMessage('success','Login Successfull'))
            dispatch(saveToken(response.data))
        })
        .catch(err=>{
                console.table("Error : ",typeof err);
         dispatch(loadMessage('danger','Sorry you are not provied vaild credtional'));
        })
    }
}
// 2) Get user
export function loadUser(token) {
    return (dispatch) => {
        return axios.get(API_URL + "/hotel-api/api/Htable",{headers: {
            'Authorization': 'Bearer '+token
        }}).then(
            response => {
                dispatch(saveUser(response.data));
            }).catch(err=>{
                console.log("Error : ",err);
            })
    }
}

// 3) Get Food 
export function loadFood(token){
    return (dispatch) => {
        return axios.get(API_URL + "/hotel-api/api/foodItem",{headers: {
            'Authorization': 'Bearer '+token
        }}).then(
            response => {
                dispatch(saveFood(response.data));
            }).catch(err=>{
                console.log("Error : ",err);
            })
    }
}
// 4) Save Food
export function saveFoodData(token,postData){
    var config = {
        headers: {'Authorization': 'Bearer '+token}
    };
    
    return(dispatch)=>{
        return axios.post(API_URL+'/hotel-api/api/foodItem',postData,config)
        .then(response=>{dispatch(loadFood(token))})
        .catch(err =>{ console.log("Error : ",err)})
    }
}
// 5) Update Food
export function updateFoodData(token,putData){
    var config = {
        headers: {'Authorization': 'Bearer '+token}
    };
    return(dispatch)=>{
        return axios.put(API_URL+'/hotel-api/api/foodItem/'+putData.foId,putData,config)
        .then(response=>{dispatch(loadFood(token))})
        .catch(err =>{ console.log("Error : ",err)})
    }
}
// 5) Delete Food
export function deleteFoodData(token,delData){
    var config = {
        headers: {'Authorization': 'Bearer '+token}
    };
    return(dispatch)=>{
        return axios.delete(API_URL+'/hotel-api/api/foodItem/'+delData.foId,config)
        .then(response=>{dispatch(loadFood(token))})
        .catch(err =>{ console.log("Error : ",err)})
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
// This is Save Food 
export function saveFood(data){
    return {
        type:"SAVE_FOOD",
        foodData: data
    }
}
// This functions message
export function loadMessage(color,message){
    return {
        type: "NOTIFICATIONS",
        color:color,
        message: message
    }
} 
