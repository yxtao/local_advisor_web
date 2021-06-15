import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../actions/posts';
import { Paper, Typography, Grid, Box , CircularProgress, Button } from '@material-ui/core';

const DetailPage = () => {
    const { post , isLoading } = useSelector ((state)=> state.posts);
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPostById(id));
    },[id]);

   if(!post) return null;
   
   if (isLoading) {
    return (
      <Paper elevation={6}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
    return(
        <Paper style ={{padding:'20px'}} elevation={6}>
          <Grid container justify="center" alignItems="stretch" spacing={1}>
              <Grid container item xs={6}  sm={6} lg={6}>
                <Box>
                   <img width='300' height = "400" src= {post.selectedFile} alt= {post.title}/>
                </Box>
              </Grid>
              <Grid container item xs={6}  sm={6} lg={6}>
                <Box width="100%">
                   <Typography>{post.title}</Typography> 
                   <Typography>{post.message}</Typography> 
                </Box>
              </Grid>
          </Grid>
        </Paper>

    );
}

export default DetailPage