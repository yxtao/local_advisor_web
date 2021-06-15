import React  from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import DetailPage from './components/DetailPage/DetailPage';

const App = () => {      
    return (
      <BrowserRouter>
         <Container maxWidth='lg'>
            <NavBar />
            <Switch>
               <Route path="/" exact component={() => <Redirect from ="/" to= "/posts" />} />
               <Route path= "/auth" exact component={props =>JSON.parse(localStorage.getItem('profile'))?  <Redirect from ="/auth" to= "/posts" />:<Auth {...props}/> }/>
               <Route path="/posts" exact component={props => <Home {...props}/>} />
               <Route path="/posts/:id" exact component={props => <DetailPage {...props}/>} />
            </Switch> 
         </Container>
      </BrowserRouter>   
    );
}

export default App; 
