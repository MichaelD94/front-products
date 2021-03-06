import React, { Component } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

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

  renderRow= (row) => {
    const { page } = this.state;
    return (
        <li key={row} className={row === page ? 'page-item active' : 'page-item'}>
            <a onClick={() => this.loadUser(row)} className="page-link" href="#">{row}</a>
        </li>
    );
  }

  render() {
    const { users, page, usersInfo } = this.state;

    // Paginação
    let rows = []
    for(let i=1; i <= usersInfo.pages; i++){
      rows.push(i)
    }

    return (
      <div>
        <Header/>
        <div className="container conteudo">
          <div className="row">
            <div className="col-12">
              <h4 className="texto-usuarios">Usuários</h4>
              <Link to={'/user/register'} className="btn btn-ivry btn-novo-usuario">Novo</Link>
              {/* <a href="/user/register" className="btn btn-ivry btn-novo-usuario">Novo</a> */}
              <ul className="list-group lista-usuarios">
                {users.map(user => (
                  <li key={user._id} className="list-group-item">
                    <div className="row">
                      <div className="col-6 col-md-8"><p className="linha-lista-user">{user.name}</p></div>
                      <div className="col-3 col-md-2">
                        <Link to={`/user/edit/${user._id}`} className="btn-sm btn-ivry">Editar</Link>
                        {/* <a className="btn-sm btn-ivry" href="#">Editar</a> */}
                      </div>
                      <div className="col-3 col-md-2">
                        <a className="btn-sm btn-danger" href="#">Excluir</a></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className='actions paginacao col-12 offset-md-2 col-md-8'>
                <nav aria-label="Page navigation example" className={usersInfo.pages === 1 ? 'page-none' : ''}>
                    <ul className="pagination justify-content-center">
                        <li className={page === 1 ? 'disabled page-item' : 'page-item'}>
                            <a className="page-link"
                                href="#"
                                disabled={page === 1}
                                onClick={this.prevPage}
                            >
                                Anterior
                            </a>
                        </li>
                        {rows.map(this.renderRow)}
                        <li className={page === usersInfo.pages ? 'disabled page-item' : 'page-item'}>
                            <a
                                className="page-link"
                                href="#"
                                disabled={page === usersInfo.pages}
                                onClick={this.nextPage}
                            >
                                Próxima
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}