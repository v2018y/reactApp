
const INITIAL_STATE = {
    token: ''
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOKEN_CHNAGE":
            return {
                ...state,
                token: action.token
            };
        default: return state;
    }
};
