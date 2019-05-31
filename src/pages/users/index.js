import React, { Component } from 'react';
import api from '../../services/api'

import'./styles';

export default class Users extends Component {
  state = {
      user:{}
  }

  componentDidMount(){
      const response = api.get('/users');

      this.setState({users: response.data});
  }
  
  
    render() {
        const user = this.state

        return <div />;
  }
}
