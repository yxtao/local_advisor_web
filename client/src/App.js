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
               <Route path="/" exact component={() => <Redirect to= "/posts" />} />
               <Route path= "/auth" exact component={()=> (JSON.parse(localStorage.getItem('profile'))?  <Redirect to= "/posts" />: <Auth/>)}/>
               <Route path="/posts" exact component={ Home } />
               <Route path="/posts/:id" exact component={ DetailPage} />
            </Switch> 
         </Container>
      </BrowserRouter>   
    );
}

export default App; 
