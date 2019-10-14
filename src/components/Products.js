import React, { Component, useState } from 'react'
import { Pagination, Row, Col, Container, Card, ListGroup, ListGroupItem, Button, CardGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//let active = 2;
//let items = [];
//for (let number = 1; number <= 5; number++) {
//    items.push(
//        <Pagination.Item key={number} active={number === active}>
//            {number}
//        </Pagination.Item>,
//    );
//}



class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            typeM: '',
            productPerPage: 4,
            currentPage: 1
        }
    }

    handleChange = event => {

        this.setState({ search: event.target.value});

    }

    handleChangeSelected = event => {

        this.setState({ typeM: event.target.value });

    }

    handleAddProduct = (id) => {
        this.props.addToCart(id);
    }


    render() {

        // Sort by price and model
        // Adadptive Pagination

        let filteredProducts = this.props.products.filter(
            (product) => {
                if ((this.state.search || this.state.typeM) != '') {

                    return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                        && product.model.toLowerCase().indexOf(this.state.typeM.toLowerCase()) !== -1

                } else {

                    return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                        && product.model.toLowerCase().indexOf(this.state.typeM.toLowerCase()) !== -1
                        && product.id > ((this.state.currentPage * this.state.productPerPage) - this.state.productPerPage) && product.id <= (this.state.currentPage * this.state.productPerPage);

                }
            }
        )


        const items = filteredProducts.map((item, key) =>

            <Col lg="3" className="grid-products">
                <CardGroup>
                <Card style={{ width: '16rem' }} key={item.id}>
                    <Card.Img variant="top" height="190.5px" src={process.env.PUBLIC_URL +`/img/plants/${item.image}`} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><strong>Price:</strong> ${item.price}</ListGroupItem>
                        <ListGroupItem><strong> Model:</strong> {item.model}</ListGroupItem>
                        <ListGroupItem><strong> Size:</strong> {item.size}</ListGroupItem>
                    </ListGroup>
                    <Card.Footer>
                        <Button onClick={() => { this.handleAddProduct(item.id) }} className="addBtn" variant="primary">
                            <FontAwesomeIcon icon={faPlusSquare} /> Add </Button>
                    </Card.Footer>
                    </Card>
                    </CardGroup>
            </Col>

        )

        //Research//////
        let momentsList = [];
        this.props.products.forEach(({ id, model }) => momentsList.push({ id, model }));

        let uniqueSet = [...new Set(momentsList.map(product => product.model))];

        let sortedList = uniqueSet.sort()
            .map((model, index) => <option key={index} >{model}</option>);

        let noFound;
        if (items.length <= 0) {
                noFound = <Col>
                    <h3>No result found</h3>
                </Col>
        }

        //Pagination///////

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.products.length / this.state.productPerPage); i++) {
            pageNumbers.push(i);
        }

        const previousPage = (pageNumber) => {
            if (pageNumber >= 1 && pageNumber <= pageNumbers.length) {
                this.setState({ currentPage: pageNumber });
                return
            } else if (pageNumber > pageNumbers.length) {
                 
               return this.setState({ currentPage: pageNumbers.length });
            } else {
               return this.setState({ currentPage: 1 });
            }

        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="input-group mb-3">

                                <input className="form-control" type="text" name="search" placeholder="Search"
                                    value={this.state.search}
                                    onChange={this.handleChange.bind(this)} />
                            </div>

                        </Col>
                        <Col lg={3}>
                        <select className="custom-select" onChange={this.handleChangeSelected.bind(this)}>
                            <option defaultValue value=''>Choose model...</option>
                            {sortedList}
                            </select>
                        </Col>
                    </Row>

                    <Row>
                        {items}
                        {noFound}
                    </Row>



                <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Pagination size="sm">
                                {//before
                                }
                                <Pagination.Prev onClick={() => previousPage(this.state.currentPage - 1)} />
                                <Pagination.Item active={this.state.currentPage === 1} onClick={() => previousPage(1)}>{1}</Pagination.Item>
                                {this.state.currentPage > 1 ? <Pagination.Ellipsis /> : null} 
                                {this.state.currentPage > 1 ? <Pagination.Item onClick={() => previousPage(this.state.currentPage - 1)}>{this.state.currentPage - 1}</Pagination.Item> : null}

                                {//mid
                                }
                                {(this.state.currentPage > 1) &&
                                    (this.state.currentPage < Math.ceil(this.props.products.length / this.state.productPerPage))
                                    ? <Pagination.Item active={this.state.currentPage !== 1}
                                    onClick={() => previousPage(this.state.currentPage)}>{this.state.currentPage}M</Pagination.Item> : null} 

                                {//after
                                }
                                {this.state.currentPage < pageNumbers.length ? <Pagination.Item onClick={() => previousPage(this.state.currentPage + 1)}>{this.state.currentPage + 1}</Pagination.Item> : null}
                                {this.state.currentPage < pageNumbers.length ? <Pagination.Ellipsis />: null}
                                {this.state.currentPage <= pageNumbers.length ? <Pagination.Item onClick={() => previousPage(Math.ceil(this.props.products.length / this.state.productPerPage))}>{Math.ceil(this.props.products.length / this.state.productPerPage)}</Pagination.Item> : null}

                                <Pagination.Next onClick={() => previousPage(this.state.currentPage +1)}/>
                        </Pagination>
                        </Col>	
                        
                </Row>
                
					</Container>	
			</div>
			
			)
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products)
