import React  from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/navBar'
import Home from './components/Home/Home'
const App = () => {      
    return (
      <BrowserRouter>
         <Container maxWidth='lg'>
            <NavBar />
            <Switch>
               <Route path="/" exact component={Home} />
            </Switch>
            <Home /> 
         </Container>
      </BrowserRouter>   
    );
}

export default App; 
