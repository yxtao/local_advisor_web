import React , { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import ideas from './images/ideas.png'
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(getPosts());                     
    },[dispatch]) 
          
    return (
       <Container maxWidth='lg'>
           <AppBar className={classes.appbar} position = "static" color="inherit">
               <Typography className={classes.heading} variant="h3" align="center">Local Advisor  
               <img className={ideas.image} src = {ideas} alt="ideas" height="30" />
               </Typography>
           </AppBar>
           <Grow in>
               <Container>
                   <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId= {setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId = {setCurrentId} />
                        </Grid>
                   </Grid>
               </Container>
           </Grow>
       </Container>
    );
}

export default App; 
