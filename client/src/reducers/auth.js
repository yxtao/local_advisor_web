import * as actionType from '../constants/actionTypes'

const authReducer =(state = {authData: null}, action) => {
    switch(action.type){
        case actionType.AUTH:
            console.log({...state, authData: action.data})
            return {...state, authData: action.data}
        default:
            return state;
    }
};

export default authReducer;

