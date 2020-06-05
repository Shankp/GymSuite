import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "./Login.css";

class Login extends Component {
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

                    <Button>Submit</Button>
                </Form>
            </div></div>

        )
    }


}
export default withRouter(Login)