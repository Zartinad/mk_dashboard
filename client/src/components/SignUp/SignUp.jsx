import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Container, Col, Row } from 'react-bootstrap/'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./SignUp.css"

export default class SignUpPage extends React.Component {
  render() {
    return (
      <Card className="SignUp" >
        <Form style={{width: "75%"}}>
          <Form.Group controlId="formGroupEmail">
            <Form.Control type="username" placeholder="Username" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Referal Code" />
          </Form.Group>
        </Form>
        <Button variant="primary">
          SignUp
        </Button>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Link to="/login" className="Links">Login</Link>
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