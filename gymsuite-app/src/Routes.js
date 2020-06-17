import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Login"><Login /></Route>  
                <Route exact path="/"><Login /></Route>    
                <Route exact path="/register"><Register/></Route>            
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;