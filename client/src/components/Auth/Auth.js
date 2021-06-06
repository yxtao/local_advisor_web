import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './styles'
import Input from './Input'

const Auth = () => {
    const isSignup = true
    const classes = useStyles()

    const handleChange =()=>{
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

                </form>
            </Paper>
        </Container>
        
    )
}

export default Auth