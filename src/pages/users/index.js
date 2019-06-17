import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css';

export default class Users extends Component {
  state = {
    users: [],
    usersInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = async (page = 1) => {
    const response = await api.get(`/users?page=${page}`);

    const { docs, ...usersInfo } = response.data;

    this.setState({ users: docs, usersInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadUser(pageNumber);
  }

  nextPage = () => {
    const { page, usersInfo } = this.state;

    if (page === usersInfo.pages) return;

    const pageNumber = page + 1;

    this.loadUser(pageNumber);
  };

  render() {
    const { users, page, usersInfo } = this.state;

    return (
      <div className='users-list'>
        {users.map(user => (
          <ul>
            <li key={user._id}>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
              <button>Deletar</button>
              <button>Editar</button>
            </li>
          </ul>
        ))}
        <div className='actions'>
          <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
                </button>
          <button disabled={page === usersInfo.pages} onClick={this.nextPage}>
            Próxima
                </button>
        </div>
      </div>
    )
  }
}