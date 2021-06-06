import React  from 'react';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar/navBar'
import Home from './components/Home/Home'
const App = () => {      
    return (
       <Container maxWidth='lg'>
          <NavBar />
          <Home /> 
       </Container>
    );
}

export default App; 
