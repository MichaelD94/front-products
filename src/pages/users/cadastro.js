import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/Header';

import './styles.css';


export default class CadastroUsuario extends Component{

    render() {
        return (
            <div>
                <Header/>
            
                <div className="container conteudo">
                    <h2 className="texto-usuarios ">Cadastro Usuário</h2>
                    <form className="form-user">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Nome"/>
                                <input type="password" className="form-control" placeholder="Senha"/>
                            </div>
                            <div className="col">
                                <input type="email" className="form-control" placeholder="Email"/>
                                <input type="password" className="form-control" placeholder="Confirmar Senha"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-6">
                                <button className="btn btn-ivry">Salvar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}