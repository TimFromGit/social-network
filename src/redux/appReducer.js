import {getAuthUserData} from "./authReducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

//action creators
export const initializedSucces = () => ({type: INITIALIZED_SUCCES});

//thunk creators
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSucces());
        });
}

export default appReducer;