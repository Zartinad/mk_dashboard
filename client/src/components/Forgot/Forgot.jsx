import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { Container, Col, Row } from 'react-bootstrap/'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import "./Forgot.css"

export default class ForgotPage extends React.Component {
  render() {
    return (
      <Card className="Forgot">
        <Form style={{width: "75%"}}>
          <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

        </Form>
        <Button variant="primary" className="Button">
          Reset Password
        </Button>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Link to="/login"  className="Links">Login</Link>
            </Col>
            <Col xs={0} md ={4}>  </Col>
            <Col xs={12} md={4}>
              <Link to="/signup" className="Links">Sign Up</Link>
            </Col>
          </Row>
        </Container>
      </Card>
    )
  }
}