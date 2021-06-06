
import {AUTH} from '../constants/actionTypes'

export const signin = (formData, router) =>async (dispatch) =>{
    try {
        //TODO: get sign in data from DB
        const data = formData
        dispatch({type: AUTH, data});
        router.push('/')
    }catch(err) {
        console.log(err)
    }
};

export const signup = (formData, router) =>async (dispatch) =>{
    try {
        //TODO: save sign up data to DB
        const data = formData
        dispatch({type: AUTH, data});
        router.push('/')
    }catch(err) {
        console.log(err)
    }
}