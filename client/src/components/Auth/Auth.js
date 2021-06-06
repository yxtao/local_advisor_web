import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin }from 'react-google-login'
import useStyles from './styles'
import Input from './Input'

const Auth = () => {
    const isSignup = true
    const classes = useStyles()

    const handleChange =()=>{
    }

    const responseGoogleSuccess=(response) =>{
        console.log(response)
    }
    const responseGoogleFailure=(err)=>{
        console.log(err)
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={ classes.paper } elevation ={ 3 }>
                <Avatar className={ classes.Avatar }>
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup? "sign up":"sign in" }</Typography>
                <form className={classes.form} onSubmit={()=>{}}>
                    <Grid container spacing={2}>
                        {
                            isSignup? 
                            (
                            <>
                            <Input name="firstName" label="First Name"  handleChange={handleChange} autoFocus half/>
                            <Input name="lastName"  label="Pass Word" handleChange={handleChange} half/>
                            </>   
                            ):null
                        }    
                            <Input name ="email" label="email" type ="email" handleChange={handleChange}/>
                            <Input name="password" label="password" type="pasword" handleChange={handleChange} />
                    </Grid>
                    <Grid container direction={"column"} spacing={3} alignItems = "center">
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary">{ isSignup? "sign up" : "sign in" }
                            </Button>
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