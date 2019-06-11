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
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

        </Form>
        <Button variant="primary">
          Reset Password
        </Button>
        <Container>
          <Row >
            <Col>
              <Link to="/login">Login</Link>
            </Col>
            <Col>
              <Link to="/SignUp">SignUp</Link>
            </Col>
          </Row>
        </Container>

      </Card>
    )
  }
}