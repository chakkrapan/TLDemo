import React from 'react';
// import logo from './cllogo.svg';
import './App.css';
import Demo1 from './component/demo1'
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './component/table'
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.getResultFromSearch = this.getResultFromSearch.bind(this)
  }

  componentWillMount() {
    this.setState({
      dataSearch: []
    })
  }

  getResultFromSearch(data) {
    console.log("result = ", data);
    this.setState({
      dataSearch: data.items
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <Demo1 resultFromSearch={this.getResultFromSearch} />
        <TableComponent dataSearch={this.state.dataSearch} />
      </div>
    )
  }

}
