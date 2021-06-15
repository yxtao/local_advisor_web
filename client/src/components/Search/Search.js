import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  getPostsBySearchQuery } from '../../actions/posts';
import { Button, Paper, TextField } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

const Search = () =>{
    const dispatch = useDispatch();
    const [keyword,  setKeyword] = useState('');
    const [tags, setTags] = useState('');
    const history= useHistory();

    const searchPosts =(e) => {
        e.preventDefault();
        if (keyword.trim() || tags) {
            dispatch(getPostsBySearchQuery({keyword:keyword, tags: tags}));
          } else {
            history.push('/');
          }
    } 
  
    return(
      <Paper>    
          <form onSubmit = {searchPosts}>
          <TextField  name="keywords" variant="outlined" label="keywords" fullWidth value={keyword} onChange={(e) => setKeyword( e.target.value )} />
          <TextField  name="tags" variant="outlined" label="tags, separate with , " fullWidth value={tags} onChange={(e) => setTags( e.target.value )} />
          <Button variant="contained" color="primary"  type="submit" fullWidth>Search</Button>
          </form>
      </Paper>
      )
}

export default Search;