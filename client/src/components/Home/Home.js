import React , { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import useStyle from './styles'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import Pagination from '../../components/Pagination/Pagination'
import Search from '../../components/Search/Search';
import { useLocation } from 'react-router';

function useQuery(){
    return new URLSearchParams(useLocation().search);
}
const Home = () =>{
    const query = useQuery();
    const page = query.get(`page`) || 1 ;
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyle();
   
    return(
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId= {setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Search />
                        { JSON.parse(localStorage.getItem('profile'))? (<Form currentId={currentId} setCurrentId = {setCurrentId} />) : null}      
                    </Grid>
                    <Grid item xs={12} sm={7}>
                    <Pagination page={page} />   
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
    }

export default Home