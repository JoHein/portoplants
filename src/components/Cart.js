import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table, Pagination, Row, Col, Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'



class Cart extends Component {

    render() {

        let addedProducts = this.props.products.length ?
            (
                this.props.products.map(item => {

                    return (

                        <div>
                            <Row>
                                <Col xs={12} md={3}>
                                    <img height="60px" src={process.env.PUBLIC_URL + `/img/plants/${item.image}`} alt={item.image}  />
                                </Col>  
                                <Col xs={12} md={3}>
                                    <div>
                                        <p>Product</p> 
                                        <h5> {item.name}</h5>
                                        
                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <p>Quantity </p>
                                    {item.quantity}   
                                    </Col>
                                <Col xs={12} md={3}>
                                    <div>
                                        <p>Price </p>
                                        ${item.price}
                                    </div>
                                </Col>
                            </Row>                       
                        </div>
                    )
                })

            )

            :

            (
                <p>Nothing</p>
            )
        return (
            <div>
                <Container>
                    <div className="cart">
                        <h5>You have ordered:</h5>

                        <ul className="collection">
                     
                        {addedProducts}
                    </ul>
                    </div>
                    <Row className="justify-content-end">
                        <Col className="text-right">
                            <h5>Total: ${this.props.total}</h5>
                        </Col>
                        </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedProducts,
        total: state.total
    }
}

export default connect(mapStateToProps)(Cart)