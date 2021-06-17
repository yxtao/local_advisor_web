import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export var error = '';
export const signin = (formData, router) =>async (dispatch) =>{
    try {
        const { data } = await api.signIn(formData);
        dispatch({type: AUTH, data});
        router.push('/')
    }catch(err) {
       error = 'incorrect username or password'
       console.log(err);
    }
};

export const signup = (formData, router) =>async (dispatch) =>{
    try {
        const { data } = await api.signUp(formData);
        dispatch({type: AUTH, data});
        router.push('/')
    }catch(err) {
        error = 'user name already exist or is invalid';
        console.log(err);
    }
}