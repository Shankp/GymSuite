import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import "./Login.css";
import {UserSighIn} from "./../../Services/LogInService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.formSubmit = this.formSubmit.bind(this);

    }

    handleEmail(text) {
        console.log(text.target.value)
        this.setState({ username: text.target.value })
    }
    handlePassword(text) {
        console.log(text.target.value)
        this.setState({ password: text.target.value })
    }

    formSubmit = async (e) => {
        e.preventDefault();
        var logonParams = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(logonParams);
        try {
            var result = await UserSighIn(this.state.username, this.state.password);
            console.log(result);
        }
        catch (error) {
            console.log(error)
        };


    }
    render() {
        return (

            <div className="divform">
                <div className="form">
                    <Form onSubmit={this.formSubmit}>

                        <FormGroup row className="formgroupstyle">
                            <div >
                                {/* <Label md={5}>Email</Label> */}
                                <Col md={2} >
                                    <Input
                                        type="text"
                                        name="userName"
                                        id="userName"
                                        placeholder="UserName here"
                                        onChange={(text) => { this.handleEmail(text) }}
                                        required
                                    />
                                </Col>
                            </div>
                        </FormGroup>


                        <FormGroup row className="formgroupstyle">
                            {/* <Label for="examplePassword" md={2}>Password</Label> */}
                            <Col md={6}>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="passsword"
                                    onChange={(password) => { this.handlePassword(password) }}
                                    required
                                />
                            </Col>
                        </FormGroup>

                        <Button>Log In</Button>
                        <div><a href="">Register</a></div>
                        <div>

                        </div>
                    </Form>
                </div>
            </div>

        )
    }
}
export default withRouter(Login)