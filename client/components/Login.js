import React, { Component } from "react";
import Axios from 'axios';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      user: '',
      headers: '',
      store: '',
      orders: '',
      errors: {}
    }
  }

  initialState(){
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      user: '',
      headers: '',
      store: '',
      orders: '',
      errors: {}
    }
  }

  updateEmail(email){
    this.setState({ email });
  }

  updatePassword(password){
    this.setState({ password });
  }

  updatePasswordConfirmation(passwordConfirmation){
    this.setState({ passwordConfirmation });
  }

  updateUser(user){
    const { email, id, uid, store_id, roles } = user;
    this.setState({ user: {email, id, uid, store_id, roles} });
  }

  updateHeaders(headers){
    if (headers.client && headers['access-token'] && headers.uid) {
      const accessToken = headers['access-token'];
      const client = headers.client;
      this.setState({ headers: {accessToken, client} });
    }
  }

  updateStore(store){
    const { id, company_id, phone, street1, street2, city, zip, name } = store;
    this.setState({
      store: { id, company_id, phone, street1, street2, city, zip, name }
    });
  }

  updateOrders(store){
    if (this.state.user.roles[0].name == "tailor"){
      const { new_orders, late_orders, current_orders } = store;
      this.setState({
        orders: { new_orders, late_orders, current_orders }
      });
    }
  }

  signIn(event){
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

  signUp(event){
    event.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    Axios.post('/api/sign_up', {
      email,
      password,
      passwordConfirmation
    })
    .then(res => {
      if (res.data.body.status === "success") {
        console.log("SUCCESSFUL SIGN UP!", res.data.body);
      }
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
      this.updateOrders(res.data.body);
      this.updateHeaders(res.data.headers);
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
          <p> company id: { company_id } </p>
        </div>
      );
    }
  }

  orderCount(orderList){
    return orderList.length;
  }

  renderOrders(){
    if (!this.state.orders) {
      return <div></div>;
    } else {
      const { late_orders, new_orders, current_orders } = this.state.orders;
      return (
        <div className="orders">
          <div className="late-orders">
            <p>{ this.orderCount(late_orders) } Late Orders  </p>
          </div>
          <div className="new-orders">
            <p>{ this.orderCount(new_orders) } New Orders  </p>
          </div>
          <div className="current-orders">
            <p>{ this.orderCount(current_orders) } Current Orders  </p>
          </div>
        </div>
      );
    }
  }

  renderRoles(){
    const { roles } = this.state.user;
    if (roles.length > 0) {
      return roles.map((role, i) => {
        const { name } = role;
        return (
          <span key={i}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
        );
      });
    }
  }

  render(){
    if (!this.state.user || !this.state.headers) {
      return (
        <div>
          <h5> Sign In!!! </h5>
          <form onSubmit={(e) => this.signIn(e)}>
            <label>
              Email:
              <input
                autoFocus={true}
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

          <h5> Sign Up </h5>
          <form onSubmit={(e) => this.signUp(e)}>
            <label>
              Email:
              <input
                autoFocus={true}
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
            <label>
              Password Confirmation:
              <input
                value={this.state.passwordConfirmation}
                onChange={(e) => this.updatePasswordConfirmation(e.target.value) }
                type='password'/>
            </label>
            <input disabled={false} type="submit" value="Submit" />
          </form>
        </div>
      );
    } else if (this.state.user && this.state.headers) {
      const { email } = this.state.user;
      return (
        <div>
          <h1> { this.renderRoles() } User Info </h1>
          <h3> Welcome, { email }! </h3>

          <button onClick={() => this.signOut()}>Sign Out</button>
          <button onClick={() => this.getUsersStore()}>Store Info</button>

          { this.renderStore() }
          <hr />
          { this.renderOrders() }
        </div>
      );
    }
  }
}

export default Login;

