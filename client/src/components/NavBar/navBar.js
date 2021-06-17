import React , { useState, useEffect }from 'react'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import * as actionType from '../../constants/actionTypes'
import ideasPicture from '../../images/ideas.png'
import { AppBar, Typography, Toolbar, Button, Avatar } from '@material-ui/core'
import { Link, useHistory, useLocation } from 'react-router-dom'

const NavBar = ()=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const logout= () =>{
        dispatch ({type: actionType.LOGOUT});
        history.push('/');
        setUser(null);
    };

    useEffect (()=>{
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])
    
    return(
            <AppBar className={classes.appBar} position = "static" color="inherit">
               <Typography className= {classes.heading} component ={Link} to="/" variant="h3" align="center">Local Advisor  
               <img className={classes.image} src = {ideasPicture} alt="ideas" height="30" />
               </Typography> 
           
            <Toolbar className={classes.toolbar}>
                { user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.firstName} >{user?.result.firstName.charAt(0)}</Avatar>
                        <Typography className={classes.userName}>{user?.result.firstName}</Typography>
                        <Button  component= {Link} to="/"className={classes.logout} color="secondary" variant="contained"  onClick={logout}>Log Out</Button>
                    </div>
                ) : (
                    <Button component= {Link} to="/auth" color="primary" variant="contained" >Sign up to create and like posts </Button> 
                    )
                }
            </Toolbar> 
         </AppBar>
      
    )
}

export default NavBar;