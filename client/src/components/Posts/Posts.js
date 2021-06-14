import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core'

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const classes = useStyles();
    const { posts , isLoading } = useSelector((state) => state.posts);

    if (!posts?.length && !isLoading) return 'No posts';

    console.log(posts +"in posts component");
    return (
       isLoading? <CircularProgress /> : (
           <Grid className = {classes.container} container alignItems="stretch" spacing={1}>
               {posts.map((post)=> (
                    <Grid key={post._id} item xs={12}  sm={6} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>   
               ))}
           </Grid>
       )
    );
}

export default Posts;

