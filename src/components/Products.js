import React, { Component } from 'react'
import { Pagination, Row, Col, Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

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
            typeM:''
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

        // Sort by price
        // Adadptive Pagination

        let filteredProducts = this.props.products.filter(
            (product) => {
                return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    && product.model.toLowerCase().indexOf(this.state.typeM.toLowerCase()) !== -1;
            }
        )

        const items = filteredProducts.map((item, key) =>

            <Col lg="3" className="grid-products">

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
                        <Button onClick={() => { this.handleAddProduct(item.id) }} className="addBtn" variant="primary">Add </Button>
                    </Card.Footer>
                </Card>
            </Col>

        )


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
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
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
