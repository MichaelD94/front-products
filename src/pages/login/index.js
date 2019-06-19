import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import avatar from '../../assets/avatar.png';
import Header from '../../components/Header';

import './styles.css';


export default class Login extends Component{

    render() {

        return (
            <div>
                <Header/>        
                <div className="container conteudo">
                    <div className="offset-md-3 col-md-6 text-center login">
                        <div className="form-group">
                        <div className="avatar-login">
                            <img src={avatar} alt=''/>
                        </div>
                        <h4 className="text-login">Login</h4>
                            {/* <label for="exampleInputEmail1">Email address</label> */}
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group">
                            {/* <label for="exampleInputPassword1">Password</label> */}
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"/>
                        </div>
                        <div className="form-check text-left">
                            <a className="link-cadastro" href="#">Cadastro</a>
                        </div>
                        <button type="submit" className="btn btn-acessar">Acessar</button>
                    </div>
                </div>
            </div>
        )
    }
}