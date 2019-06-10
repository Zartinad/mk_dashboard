import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default class MyVerticallyCenteredModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
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
                    <Button variant="light">Sign Up</Button>
                    <Button variant="light">Forgot Password</Button>

                </Modal.Body>
            </Modal>
        );
    }
}