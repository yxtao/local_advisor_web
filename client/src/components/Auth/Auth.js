import React, { useState, useEffect }from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin }from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signin, signup, error } from '../../actions/auth'
import useStyles from './styles'
import Input from './Input'

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const[form, setForm] = useState({ firstName: '', lastName: '', email: '', password: ''});
    const [isSignUp, setIsSignUp] = useState(true);

    const [message, setMessage] = useState('')
   
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(isSignUp) {
            dispatch(signup(form, history));  
            setTimeout(()=> 
            {setMessage(error===''?"success": error)}, 3000 );   
        }else{
            dispatch(signin(form, history));   
            setMessage("Verifying account .......");
            setTimeout(()=> 
                {setMessage(error===''?"success": error)}, 3000 );   
        } 
    }  

    const handleSignIn = () =>{
         setIsSignUp(false);
    }
    
    const handleSignUp = () =>{
        setIsSignUp(true);
    }

    const responseGoogleSuccess=(response) =>{
        console.log(response)
    }
    const responseGoogleFailure=(err)=>{
        console.log(err)
    }


    return(
        <Container component="main" maxWidth="xs">
            <p> {message} </p>
            <Paper className={ classes.paper } elevation ={ 3 }>
                <Avatar className={ classes.Avatar }>
                </Avatar>
                <Typography component="h1" variant="h5"> account </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp? 
                            (
                            <>
                            <Input name="firstName" label="First Name"  handleChange={handleChange} autoFocus half/>
                            <Input name="lastName"  label="Last Name" handleChange={handleChange} half/>
                            </>   
                            ):null
                        }    
                            <Input name ="email" label="email" type ="email" handleChange={handleChange}/>
                            <Input name="password" label="password" type="text" handleChange={handleChange} />
                    </Grid>
                    <Grid container direction={"column"} spacing={3} alignItems = "center">
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary">submit</Button>
                        </Grid>
                        <Grid item >
                            <Button variant="contained" color="primary" onClick={handleSignIn}> Sign in </Button>
                             &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="contained" color="primary" onClick={handleSignUp}> Sign up </Button>      
                        </Grid>
                    
                        <Grid item>
                            <GoogleLogin 
                                clientId=""
                                buttonText="Login with Google account"
                                onSuccess={responseGoogleSuccess}
                                onFailure={responseGoogleFailure}
                                cookiePolicy={'single_host_origin'} />
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
        
    )
}

export default Auth