import React, { Component } from 'react'
import { Card, Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'
export default class Demo1 extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            searchText: ""
        })
        console.log('this is will mount');

    }

    componentDidMount() {
        console.log('this is did mount');
    }

    onSearch() {
        if(this.props.resultFromSearch){
            console.log('has a props');
            
        }
        let self = this
        axios.get('https://api.github.com/search/users?q=' + this.state.searchText)
            .then(function (response) {
                // handle success
                console.log(response);
                self.props.resultFromSearch(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
                console.log("Action Success");

            });
    }

    render() {
        return (
            <Row className="justify-content-md-center" style={{ margin: "0px auto" }}>
                <Col xs="6">
                    <Card style={{ width: '40rem' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>Search User Github</Card.Title>
                            <Card.Text>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroup-sizing-default">Github Username</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl onChange={(e) => this.setState({ searchText: e.target.value })}
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                            </Card.Text>
                            <Button onClick={() => this.onSearch()} variant="primary">Search</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}