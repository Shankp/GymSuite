import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./Register.css";

class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <div className="divform">
                <div className="form">
                    <Form >

                        <FormGroup row>
                            <div >
                                <Label md={5}>UserName</Label>
                                <Col md={2} >
                                    <Input
                                        type="username"
                                        name="username"
                                        id="username"
                                        placeholder="add username here.."
                                    />
                                </Col>
                            </div>
                        </FormGroup>

                        <FormGroup row>
                            <div >
                                <Label md={5}>Email</Label>
                                <Col md={2} >
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmail"
                                        placeholder="myemail@email.com"
                                    />
                                </Col>
                            </div>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="examplePassword" md={2}>Password</Label>
                            <Col md={6}>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label md={2}>Roles</Label>
                            <Col md={6}>
                                <Input  type="select"   name="roles"  id="role" >
                                    <option value="User" id="0" >User</option>
                                    <option value="Moderator" id="0" >Moderator</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <Button>Submit</Button>
                    </Form>
                </div></div>

        )
    }

}

export default withRouter(Register)