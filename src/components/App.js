import React, { Component } from 'react';
import SubTitle from './SubTitle';
import '../../styles/App.css';
import Axios from 'axios';
import Login from './Login';

class App extends Component {

  constructor(){
    super();
    this.state= {
      user: null
    }
  }

  componentDidMount(){
    Axios.get('/api/users/1')
      .then(data => {
        this.updateUser(data.data);
      });
  }

  updateUser(user){
    this.setState({
      user: user
    })
  }

  renderUser(){
    if (!this.state.user) {return <p>Loading...</p>}
    return (
      <ul>
        <li>Name: {this.state.user.name}</li>
      </ul>
    );
  }

  render() {
    return(
      <div>
        <h3> !!!!!Hi i am the app component! I am in root? </h3>
        <SubTitle />
        <Login />
        { this.renderUser() }
      </div>
   );
  }
}

export default App;
