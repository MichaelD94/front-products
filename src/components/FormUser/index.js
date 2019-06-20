import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import api from '../../services/api';

import './styles.css';


export default class FormUser extends Component {
    state = {
        user: {
            name: '',
            email: '',
            password: '',
            isAdmin: false
        },
        error: ''
    };
    // constructor() {
    //     super()
    //     this.handleInputChange = this.handleInputChange.bind(this)
    // }

    
    async componentDidMount() {
        // buscar dados do usuário
        const id = this.props.id;
        
        if (id !== undefined && id !== '') {
            api.get(`/users/${id.id}`)
                .then(response => {
                    let user = this.state.user;
                    user.name = response.data.name;
                    user.email = response.data.email;
                    this.setState({
                        user
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }


    // verifica se é edição ou novo user
    saveUser = (event) => {
        event.preventDefault();
        const { id } = this.props;
        if (id !== undefined && id !== '') {
            this.editUser(this.state.user);
        } else {
            this.createUser(this.state.user);
        }
    }


    createUser = async (user) => {
        // debugger
        await api.post('/users', user)
        .then(() => {
            // ir para pagina de usuários
        })
        .catch(error => {
            console.log(error);
            this.setState({
                error: 'Ocorreu um erro ao salvar o registro, favor confirmar os dados'
            })
        })
    };

    editUser = async (user) => {
        const { id } = this.props;
        await api.put(`/users/${id.id}`, user)
        .then(() => {
            // ir para pagina de usuários
        })
        .catch(error => {
            console.log(error);
            this.setState({
                error: 'Ocorreu um erro ao salvar o registro, favor confirmar os dados'
            })
        })
    }

    // Set valor objeto user
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState(prevState => ({
            user: {                   // object that we want to update
                ...prevState.user,    // keep all other key-value pairs
                [name]: value       // update the value of specific key
            }
        }))
      }

    render() {
        return (
            <div>
                { this.state.error !== '' ?
                    <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div> : <div></div>
                }
           
                <form onSubmit={this.saveUser} className="form-user">
                    <div className="form-row">
                        <div className="col">
                            <input
                                required
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Nome"
                                value={this.state.user.name}
                                onChange={this.handleInputChange}/>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Senha"
                                value={this.state.user.password}
                                onChange={this.handleInputChange}/>

                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="isAdmin"
                                    name="isAdmin"
                                    checked={this.state.user.isAdmin}
                                    onChange={this.handleInputChange}/>
                                <label className="form-check-label" htmlFor="isAdmin">
                                    Administrador
                                </label>
                            </div>     
                        </div>
                        <div className="col">
                            <input
                                required
                                id="email"
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={this.state.user.email}
                                onChange={this.handleInputChange}/>
                            {/* <input
                                type="password"
                                className="form-control"
                                placeholder="Confirmar Senha"
                                value={this.state.user.password}
                                onChange={this.handleInputChange}/> */}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <button className="btn btn-ivry">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}



