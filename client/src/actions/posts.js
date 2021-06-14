import * as api from '../api'; 
import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_ID} from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = {type : FETCH_ALL, payload: data};
        dispatch(action);
    }catch (error) {
        console.log(error);
    }  
}

export const getPostById =(id) => async (dispatch) =>{
    try {
        const { data } = await api.fetchPostById(id);
        const action = {type: FETCH_BY_ID, payload: data};
        console.log( data );
        dispatch(action);
    }catch(error) {
        console.log(error);
    }
}

export const createPost =(post) => async (dispatch) =>{
    try {
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data})
        console.log(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    }catch(error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id});
    }catch(error) {
        console.log(error);
    }
}


