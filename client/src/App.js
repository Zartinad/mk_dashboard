import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Login from './components/Login'
import SignUp from './components/Signup'
import ForgotPass from './components/ForgotPassword'

//Bootstrap Components
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginShow: false,
      signUpShow: false,
      forgotPassShow: false,
    };
  }

  render() {
    let loginClose = () => this.setState({ loginShow: false });
    let signUpClose = () => this.setState({ signUpShow: false });
    let forgotPassClose = () => this.setState({ forgotPassShow: false });


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
          <ButtonToolbar>
            <Button variant="primary" onClick={() => this.setState({ loginShow: true })}>
              Login 
            </Button>
            <Button variant="primary" onClick={() => this.setState({ signUpShow: true })}>
              Sign Up 
            </Button>
            <Button variant="primary" onClick={() => this.setState({ forgotPassShow: true })}>
              Forgot Password 
            </Button>
          </ButtonToolbar>
        
          <Login
            show={this.state.loginShow}
            onHide={loginClose}
          />
          <SignUp
            show={this.state.signUpShow}
            onHide={signUpClose}
          />
          <ForgotPass
            show={this.state.forgotPassShow}
            onHide={forgotPassClose}
          />
        </header>
      </div>
    );
  }
};
