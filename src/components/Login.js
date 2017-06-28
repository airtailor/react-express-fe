import React, { Component } from "react";
import Axios from 'axios';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  updateEmail(email){
    this.setState({ email });
  }

  updatePassword(password){
    this.setState({ password });
  }

  handleSubmit(event){
    event.preventDefault();
    const { email, password } = this.state;
    Axios.post('/api/login', {
      email,
      password
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render(){
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}> 
        <label>
          Email:
          <input 
            value={this.state.email} 
            onChange={(e) => this.updateEmail(e.target.value) } />
        </label>
        <label>
          Password:
          <input 
            value={this.state.password} 
            onChange={(e) => this.updatePassword(e.target.value) } 
            type='password'/>
        </label>
        <input disabled={true} type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;

