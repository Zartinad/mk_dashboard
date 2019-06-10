import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export default class ForgotPassword extends React.Component {
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
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Control placeholder="Referal Code" />
                        </Form.Group>
                    </Form>
                    <Button variant="primary">
                       Reset Password
                    </Button>
                    <Button variant="light">Login</Button>
                    <Button variant="light">SignUp</Button>

                </Modal.Body>
            </Modal>
        );
    }
}