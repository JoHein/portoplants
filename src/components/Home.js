import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="hero">
                    <div className="hero-container">
                        <h1>Mad About Plants</h1>
                        <h2>Wholesale nursery</h2>
                        <LinkContainer to="/products">
                            <a href="/products" className="btn-get-started">Get Started</a>
                        </LinkContainer>
                    </div>
                </section> 
            </div>

            )
    }
}