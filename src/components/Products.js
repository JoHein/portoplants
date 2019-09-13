import React, { Component } from 'react'
import { Pagination, Row, Col, Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

//let active = 2;
//let items = [];
//for (let number = 1; number <= 5; number++) {
//    items.push(
//        <Pagination.Item key={number} active={number === active}>
//            {number}
//        </Pagination.Item>,
//    );
//}



export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            typeM:'',
            products: [
                {
                    id:1,
                    name: 'Acalypha',
                    price: '$29.9',
                    model: 'Shrub',
                    size: '140mm',
                    description: 'A large leaf bushy shrub  to 1.5m with green & white marked leaves. Very hardy',
                    image: '../img/plants/alcalypha.jpg',
                },
                {
                    id:2,
                    name: 'Allamanda',
                    price: '$14.9',
                    model: 'Shrub',
                    size: '220mm',
                    description: 'Compact habit, small glossy green leaves, brilliant yellow trumpet flowers',
                    image: '../img/plants/allamanda_sunee.jpg',

                },
                {
                    id: 3,
                    name: 'Dietes',
                    price: '$14.9',
                    model: 'Groundcoverts',
                    size: 'none',
                    description: 'Clumping plant , iris like yellow flowers with brown spots',
                    image: '../img/plants/dietes.jpg',

                },
                {
                    id: 4,
                    name: 'Cuphea',
                    price: '$8.9',
                    model: 'Groundcoverts',
                    size: 'none',
                    description: 'Compact small shrub ideal as a border plant, bears masses of small mauve flowers',
                    image: '../img/plants/cuphea.jpg',

                },
                {
                    id: 5,
                    name: 'Alexander palm',
                    price: '$99.9',
                    model: 'Palm',
                    size: '600mm',
                    description: 'Tall solitary trunk palm, grey ringed trunk, long arching fronds ',
                    image: '../img/plants/alexanderpalm.jpg',

                },
                {
                    id: 6,
                    name: 'Silver lady',
                    price: '$25.9',
                    model: 'Fern',
                    size: '160mm',
                    description: 'Rosette forming fern, best grown in semi shade, bright green new growth',
                    image: '../img/plants/sylverlady.jpg',

                },
            ],
        }
    }


    handleChange = event => {

        this.setState({ search: event.target.value});

    }

    handleChangeSelected = event => {

        this.setState({ typeM: event.target.value });

    }

    render() {

        // Sort by price
        // Display only model select
        // Adadptive Pagination

        let filteredProducts = this.state.products.filter(
            (product) => {
                return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    && product.model.toLowerCase().indexOf(this.state.typeM.toLowerCase()) !== -1;
            }
        )

        const items = filteredProducts.map((item, key) =>


            <Col lg="3" className="grid-products">

                <Card style={{ width: '16rem' }} key={item.id}>
                    <Card.Img variant="top" height="190.5px" src={`${item.image}`} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><strong>Price:</strong> {item.price}</ListGroupItem>
                        <ListGroupItem><strong> Model:</strong> {item.model}</ListGroupItem>
                        <ListGroupItem><strong> Size:</strong> {item.size}</ListGroupItem>
                    </ListGroup>
                    <Card.Footer>
                        <Button className="addBtn" variant="primary">Add </Button>
                        <Button variant="info">More </Button>
                    </Card.Footer>
                </Card>
            </Col>

        )


        let momentsList = [];
        this.state.products.forEach(({ id, model }) => momentsList.push({ id, model }));

        let uniqueSet = [...new Set(momentsList.map(product => product.model))];

        let sortedList = uniqueSet.sort()
            .map((model, index) => <option key={index} >{model}</option>);
        console.log('ta mere', items);

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