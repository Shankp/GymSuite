import React, { Component }  from 'react';
import { withRouter } from 'react-router';

class Login extends Component{
    constructor(props)
    {
        super(props);
    }

    render() {
        return(
            <h1>Test Header</h1>    
        )
    }


}
export default withRouter(Login)