import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import Login from './Components/Login/Login';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Login"><Login /></Route>  
                <Route exact path="/"><Login /></Route>              
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;