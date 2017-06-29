import React, { Component } from "react";
import Axios from 'axios';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      user: '',
      headers: '',
      store: '',
      errors: {}
    }
  }

  initialState(){
    return {
      email: '',
      password: '',
      user: '',
      headers: '',
      store: '',
      errors: {}
    }
  }

  updateEmail(email){
    this.setState({ email });
  }

  updatePassword(password){
    this.setState({ password });
  }

  updateUser(user){
    const { email, id, uid, store_id } = user;
    this.setState({ user: {email, id, uid, store_id} });
  }

  updateHeaders(headers){
    const accessToken = headers['access-token'];
    const client = headers.client;
    this.setState({ headers: {accessToken, client} });
  }

  updateStore(store){
    const { id, company_id, phone, street1, street2, city, zip, name } = store;
    this.setState({ 
      store: { id, company_id, phone, street1, street2, city, zip, name }
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const { email, password } = this.state;
    Axios.post('/api/login', {
      email,
      password
    })
    .then(res => {
      this.updateUser(res.data.body);
      this.updateHeaders(res.data.headers);
    })
    .catch(err => {
      console.log(err);
    });
  }

  removeCurrentUser(){
    const initialState = this.initialState();
    this.setState(initialState);
  }

  signOut(){
    const { accessToken, client } = this.state.headers;
    const { uid } = this.state.user;
    const body = { accessToken, client, uid };
    Axios.post('/api/sign_out', body)  
    .then(res => {
      this.removeCurrentUser();
    })
    .catch(err => {
      console.log(err);
    });
  }

  getUsersStore(){
    const { accessToken, client } = this.state.headers;
    const { uid, store_id } = this.state.user;
    const body = { accessToken, client, uid };

    Axios.post(`/api/store/${store_id}`, body)
    .then(res => {
      this.updateStore(res.data.body);
    })
    .catch(err => {
      console.log("error", err);
    });
  }

  renderStore(){
    if (!this.state.store) {
      return <div></div>;
    } else {
      const {name, street1, street2, city, state, company_id} = this.state.store;
      return (
        <div>
          <h3>{ name }</h3>
          <p> { street1 } </p>
          <p> { street2 } </p>
          <p> { city } </p>
          <p> { state } </p>
          <p> Company ID: { company_id } </p>
        </div>
      );
    }
  }

  render(){
    if (!this.state.user || !this.state.headers) {
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
          <input disabled={false} type="submit" value="Submit" />
        </form>
      );
    } else if (this.state.user && this.state.headers) {
      const { email } = this.state.user;
      return (
        <div>
          <h1> User Info </h1>
          <h3> Welcome, { email }! </h3>

          <button onClick={() => this.signOut() }>Sign Out</button>
          <button onClick={() => this.getUsersStore()}>Store Info</button>

          { this.renderStore() }
        </div>
      );
    }
  }
}

export default Login;

