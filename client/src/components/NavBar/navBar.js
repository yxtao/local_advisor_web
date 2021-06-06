import React from 'react'
import useStyles from './styles';
import ideasPicture from '../../images/ideas.png'
import { AppBar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = ()=>{
    const classes = useStyles();
    return(
        <AppBar className={classes.appbar} position = "static" color="inherit">
            <div >
               <Typography component ={Link} to="/" className={classes.heading} variant="h3" align="center">Local Advisor  
               <img className={ideasPicture.image} src = {ideasPicture} alt="ideas" height="30" />
               </Typography>
            </div>   
         </AppBar>
    )
}

export default NavBar;