import { combineReducers } from 'redux';

import posts from './posts';
//decide which reducers would be used for the UI components
export default combineReducers({
    posts: posts,
});
