import React from 'react'
import useStyles from './styles';
import ideasPicture from '../../images/ideas.png'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = ()=>{
    const classes = useStyles();
    const user = null;
    return(
        <AppBar className={classes.appbar} position = "static" color="inherit">
            <div align="center"> 
               <Typography component ={Link} to="/" className={classes.heading} variant="h3" align="center">Local Advisor  
               <img className={ideasPicture.image} src = {ideasPicture} alt="ideas" height="30" />
               </Typography>
            </div>  
            <Toolbar>
                {user ? (
                    <div>
                         <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography>{user?.result.name}</Typography>
                    </div>
                ) : (
                    <Button component= {Link} to="/auth" color="secondary" variant="contained" >Sign up</Button> 
                    )
                }
            </Toolbar> 
         </AppBar>
    )
}

export default NavBar;