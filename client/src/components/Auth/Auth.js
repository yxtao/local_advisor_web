import React, { useState, useEffect }from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin }from 'react-google-login'
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signin, signup } from '../../actions/auth'
import useStyles from './styles'
import Input from './Input'

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const[form, setForm] = useState({ firstName: '', lastName: '', email: '', password: ''});
    const[buttonText, setButtonText] = useState("Sign up");
    const [isSignup, setIsSignUp] = useState(false);
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(isSignup){
            dispatch(signup(form, history));  
        }else{
            dispatch(signin(form, history));
        }
    }
    const handleSwitch = () =>{
        setIsSignUp((preState)=>!preState);
    }

    const responseGoogleSuccess=(response) =>{
        console.log(response)
    }
    const responseGoogleFailure=(err)=>{
        console.log(err)
    }

    useEffect(()=>
       setButtonText((preState)=> preState === "Sign up" ? "Sign in": "Sign up")
       ,[isSignup]
    )

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={ classes.paper } elevation ={ 3 }>
                <Avatar className={ classes.Avatar }>
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup? "sign up":"sign in" }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup? 
                            (
                            <>
                            <Input name="firstName" label="First Name"  handleChange={handleChange} autoFocus half/>
                            <Input name="lastName"  label="Last Name" handleChange={handleChange} half/>
                            </>   
                            ):null
                        }    
                            <Input name ="email" label="email" type ="email" handleChange={handleChange}/>
                            <Input name="password" label="password" type="password" handleChange={handleChange} />
                    </Grid>
                    <Grid container direction={"column"} spacing={3} alignItems = "center">
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary">{ buttonText } </Button>
                        </Grid>
                        <Grid>
                            <Button variant="contained" color="primary" onClick={handleSwitch}> switch </Button>
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