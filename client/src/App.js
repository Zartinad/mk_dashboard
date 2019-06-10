import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Login from './components/login'

//Bootstrap Components
import Button from 'react-bootstrap/Button'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalShow: false
    };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>
            Login 
          </Button>
          <Login
            show={this.state.modalShow}
            onHide={modalClose}
          />
        </header>
      </div>
    );
  }
};
