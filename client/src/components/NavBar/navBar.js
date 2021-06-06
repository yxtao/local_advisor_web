import React from 'react'
import useStyles from './styles';
import ideasPicture from '../../images/ideas.png'
import { AppBar, Typography } from '@material-ui/core'

const NavBar = ()=>{
    const classes = useStyles();
    return(
        <AppBar className={classes.appbar} position = "static" color="inherit">
               <Typography className={classes.heading} variant="h3" align="center">Local Advisor  
               <img className={ideasPicture.image} src = {ideasPicture} alt="ideas" height="30" />
               </Typography>
         </AppBar>
    )
}

export default NavBar;