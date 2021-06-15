import * as api from '../api'; 
import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_ID,FETCH_BY_PAGE, START_LOADING, END_LOADING} from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPosts();
        const action = {type : FETCH_ALL, payload: {posts: data}};
        dispatch(action);
        dispatch({ type: END_LOADING});
    }catch (error) {
        console.log(error);
    }  
}

export const getPostById =(id) => async (dispatch) =>{
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchPostById(id);
        const action = {type: FETCH_BY_ID, payload: {post:data}};
        dispatch(action);
        dispatch({ type: END_LOADING});
    }catch(error) {
        console.log(error);
    }
}

export const getPostsByPage=(page) => async (dispatch) =>{
    try {
        dispatch({type:START_LOADING});
        const response = await api.fetchPostsByPage(page);
        const action = {type: FETCH_BY_PAGE, payload: response.data};
        dispatch(action);
        dispatch({ type: END_LOADING });
    }catch(error) {
        console.log(error);
    }
}

export const getPostsBySearchQuery = (searchQuery) => async (dispatch) =>{
    try {
        dispatch({type:START_LOADING});
        const response = await api.fetchPostsBySearch(searchQuery);
        const action = {type: FETCH_BY_PAGE, payload: response.data};
        dispatch(action);
        dispatch({ type: END_LOADING });
    }catch(error) {
        console.log(error);
    }
}
export const createPost =(post) => async (dispatch) =>{
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data})
        dispatch({ type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
        dispatch({ type: END_LOADING});
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


