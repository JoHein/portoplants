import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import { faPlusSquare, faMinusSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Cart extends Component {

    //Remove everything
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
   
    render() {

        let addedProducts = this.props.products.length ?
            (
                this.props.products.map(item => {



                    return (

                        

                        <div >
                            <Row>
                                <Col xs={12} md={3} className="text-center">
                                    <img height="60px" src={process.env.PUBLIC_URL + `/img/plants/${item.image}`} alt={item.image}  />
                                </Col>  
                                <Col xs={12} md={3} className="text-center">
                                    <div>
                                        <p>Product</p> 
                                        <h5> {item.name}</h5>
                                        
                                    </div>
                                </Col>
                                <Col xs={12} md={2} className="text-center">
                                    <p>Quantity </p>
                                    {item.quantity}   
                                    </Col>
                                <Col xs={12} md={2} className="text-center">
                                    <div>
                                        <p>Price</p>
                                        ${item.price}
                                    </div>
                                </Col>
                                <Col xs={12} md={2} className="text-center align-self-center">
                                        <FontAwesomeIcon icon={faPlusSquare} onClick={() => { this.handleAddQuantity(item.id) }}/>
                                        <FontAwesomeIcon icon={faMinusSquare} onClick={() => { this.handleSubtractQuantity(item.id) }}/>
                                        <FontAwesomeIcon icon={faTrashAlt} onClick={() => { this.handleRemove(item.id) }}/>
                                </Col>  
                            </Row>                       
                                </div>
                            
                    )
               

                })

            )

            :

            (

                    <p> Nothing </p>

                )

        
                return (
            <div>
                        <Container>
                    <div className="cart">
                        <h5>You have ordered:</h5>
                        <div>
                                   
                        </div>


                        <ul className="collection" id={"mapage"}>

                                    {addedProducts}
                        </ul>
                    </div>
                    <Row className="justify-content-end">
                        <Col className="text-right">
                                    <h5>Total: ${this.props.total.toFixed(2)}</h5>
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


