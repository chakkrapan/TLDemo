import React from 'react'
import { Table, Row, Col } from 'react-bootstrap'
export default class TableComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            data: []
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            console.log("props is change");
            this.setState({
                data: nextProps.dataSearch
            })
        }
    }

    generateTable() {
        let dataRow = []
        console.log("state" , this.state.data);
        
        this.state.data.forEach((element, index) => {
            dataRow.push(
                <tr>
                    <td>{index+1}</td>
                    <td>{element.id}</td>
                    <td>{element.login}</td>
                    <td>{element.avatar_url}</td>
                </tr>
            )
        });
        return dataRow
    }

    render() {
        return (
            <Row className="justify-content-md-center">
                <Col xs="8">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Pic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.generateTable().length !== 0 ? this.generateTable() : <tr><td colSpan="4">data not found</td></tr>}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}