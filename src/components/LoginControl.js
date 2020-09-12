
import React from 'react'

function LoginButton(props) {
    return (
      <button onClick={()=>props.onClick()}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={()=> props.onClick()}>
        Logout
      </button>
    );
  }

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  export default class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      // this.handleLoginClick = this.handleLoginClick.bind(this);
      // this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.logedin = 'Welcome back!'  ;
      this.logedout = 'Please log in ' ; 
      this.state = {isLoggedIn: false, message: this.logedin};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true, message: this.logedin});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false, message: this.logedout});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={()=> this.handleLogoutClick()} />;
      } else {
        button = <LoginButton onClick={()=> this.handleLoginClick()} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn}/>
      <h1>{this.state.message}</h1>
          {button}
        </div>
      );
    }
  }