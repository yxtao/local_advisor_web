import axios from 'axios';

//const url ="https://local-advisor.herokuapp.com/posts";
const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const fetchPostById = (id) =>API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post('/posts', newPost); 
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/${id}`, deletePost);
export const signIn = (formData) => API.post('user/signIn',formData);
export const signUp = (formData) => API.post('user/signUp', formData);