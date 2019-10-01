import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Menu extends Component {
    
    render() {
        return (
            <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                    <IndexLinkContainer to="/portoplants">
                        <Navbar.Brand ><FontAwesomeIcon icon={faHome} /></Navbar.Brand>
                    </IndexLinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }} >
                            <LinkContainer to="/cart">
                                <Nav.Link><FontAwesomeIcon icon={faShoppingCart}/></Nav.Link>
                            </LinkContainer>
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
