import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_ID } from '../constants/actionTypes';

const reducer = (state= {posts:[]}, action) =>{
    switch (action.type) {
        case FETCH_ALL:
            return {...state, posts: action.payload};
        case FETCH_BY_ID:
            return {...state, post: action.payload};
        case UPDATE:
            return state.posts.map((post)=> post._id === action.payload._id ? action.payload : post) ;                                         
        case CREATE:
            return  [...state.posts, action.payload];
        case DELETE:
            return state.posts.filter((post) => post._id !== action.payload);
        default:
            return state.posts;       
    }
}

export default reducer;
