import React, {Fragment, Component} from 'react';
import Login from '../Login/Login';
import FlashCards from '../FlashCards/FlashCards';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      homescreen: false
    }
  }
  loggedIn(token){
    this.setState({token});
  }
  render(){
    if(this.state.homescreen)
      return <Login loggedIn={this.loggedIn} />;
    else
      return <FlashCards />;
  }
}