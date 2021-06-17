import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_ID, START_LOADING, END_LOADING, FETCH_BY_PAGE , FETCH_BY_SEARCH } from '../constants/actionTypes';

const reducer = (state= {isLoading: true , posts:[], post: null, render: false }, action) =>{
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false }; 
        case FETCH_ALL:
            return {...state, posts: action.payload.posts };
        case FETCH_BY_PAGE:
            return {...state, posts: action.payload.posts, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages};
        case FETCH_BY_SEARCH :
            return {...state, posts: action.payload.posts};
        case FETCH_BY_ID:
            return {...state, post: action.payload.post};
        case UPDATE:
             return {...state, posts:state.posts.map((post)=> post._id === action.payload._id ? action.payload : post) , render: true };                                                
        case CREATE:
            return  {...state, posts: [...state.posts, action.payload ], render:true};
        case DELETE:
            return state.posts.filter((post) => post._id !== action.payload);
        default:
            return state;       
    }
}

export default reducer;
