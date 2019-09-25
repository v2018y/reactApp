
const INITIAL_STATE = {
    token: '',
    userData:[]
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
                userData: action.token
            };
        
        default: return state;
    }
};
