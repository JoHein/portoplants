import React, { Component } from 'react'
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Gmap from './Gmap'

export default class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <blockquote>
                                <strong>Mad About Plants</strong>
                            </blockquote>
                            <p>
                                P.O.Box 468 <br />
                                EDMONTON QLD 4869<br />
                                Ph 0740452777<br />
                                Fax 0740555469 <br />

                            </p>      
                        </Col>
                        <Col xs lg="4">
                            <Gmap />
                        </Col>
                    </Row>   

                    <Row className="justify-content-md-center" >
                        <Col xs lg="6">
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Enquiry</Form.Label>
                                    <Form.Control as="textarea" placeholder="Message" rows="3" />
                                </Form.Group>
                            </Form>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                            </Col>
                        </Row>

                   
                </Container>
            </div>

        )
    }
}