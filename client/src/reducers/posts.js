import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_ID, START_LOADING, END_LOADING, FETCH_BY_PAGE } from '../constants/actionTypes';

const reducer = (state= {isLoading: true , posts:[], post: null}, action) =>{
    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case END_LOADING:
            return {...state, isLoading: false}; 
        case FETCH_ALL:
            return {...state, posts: action.payload.posts };
        case FETCH_BY_PAGE:
            console.log("in reducer");
            console.log(action.payload);
            return {...state, posts: action.payload.posts};
        case FETCH_BY_ID:
            return {...state, post: action.payload.post};
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
