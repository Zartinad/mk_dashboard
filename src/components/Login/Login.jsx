import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Container, Col, Row } from 'react-bootstrap/'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Login.css"

export default class LoginPage extends React.Component {
    componentDidMount(){
        document.title = "Login"
      }

    render() {
        return (
            <Card className="Login">
                <Form style={{width: "75%"}}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <Button variant="primary" className="Button">
                    Login
                </Button>
                <Container>
          <Row style={{"padding-top": "50px"}}>
            <Col xs={12} md={4}>
              <Link to="/signup" className="Links">Sign up</Link>
            </Col>
            <Col xs={0} md ={4}>  </Col>
            <Col xs={12} md={4}>
              <Link to="/forgot" className="Links">Forgot</Link>
            </Col>
          </Row>
        </Container>
            </Card>
        )
    }
}