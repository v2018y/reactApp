
const INITIAL_STATE = {
    token: '',
    userData:[],
    foodData:[],
    color:'',
    message:''
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOKEN_CHNAGE":
            return {
                ...state,
                token: action.token
            };
        case "SAVE_USER":
            return {
                ...state,
                userData: action.userData
            };
        case "SAVE_FOOD":
            return {
                ...state,
                foodData: action.foodData
        };
        case "NOTIFICATIONS":
            return {
                ...state,
                color: action.color,
                message: action.message
        };
        
        default: return state;
    }
};
