import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Container, Col, Row } from 'react-bootstrap/'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Login.css"

export default class LoginPage extends React.Component {
    render() {
        return (
            <Card className="Login">
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <Button variant="primary">
                    Login
                </Button>
                <Container>
                    <Row >
                        <Col>
                            <Link to="/SignUp">Sign Up</Link>
                        </Col>
                        <Col>
                            <Link to="/Forgot">Forgot</Link>
                        </Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}