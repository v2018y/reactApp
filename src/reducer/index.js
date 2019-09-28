
const INITIAL_STATE = {
    token: '',
    userData:[],
    foodData:[]
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
        
        default: return state;
    }
};
