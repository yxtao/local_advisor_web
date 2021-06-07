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
        history.push('/auth');
        setUser(null);
    };

    useEffect (()=>{
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])
    
    return(
        <AppBar className={classes.appbar} position = "static" color="inherit">
            <div align="center"> 
               <Typography component ={Link} to="/" className={classes.heading} variant="h3" align="center">Local Advisor  
               <img className={ideasPicture.image} src = {ideasPicture} alt="ideas" height="30" />
               </Typography>
            </div>  
            <Toolbar>
                { user ? (
                    <div>
                        <Avatar alt={user?.result.firstName} >{user?.result.firstName.charAt(0)}</Avatar>
                        <Typography>{JSON.stringify(user?.result.firstName)}</Typography>
                        <Button color="secondary" variant="contained"  onClick={logout}>Log Out</Button>
                    </div>
                ) : (
                    <Button component= {Link} to="/auth" color="primary" variant="contained" >Sign up </Button> 
                    )
                }
            </Toolbar> 
         </AppBar>
    )
}

export default NavBar;