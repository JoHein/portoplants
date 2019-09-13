import React, { Component } from 'react'
import { Nav, Navbar, Image } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

export default class Menu extends Component {
    
    render() {
        return (
            <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                    <LinkContainer to="/portoplants">
                            <Navbar.Brand ><Image src="img/logo.png" fluid /></Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }} >
                            <IndexLinkContainer to="/portoplants">
                                    <Nav.Link>Home</Nav.Link>
                            </IndexLinkContainer>
                                <LinkContainer to="/products">
                                    <Nav.Link>Products</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

         
            </div>
        )
    }
}
