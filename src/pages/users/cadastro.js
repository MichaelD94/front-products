import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './styles.css';


export default class CadastroUsuario extends Component{

    render() {
        return (
            <div className="container conteudo">
                <h2 className="texto-usuarios ">Cadastro Usuário</h2>
                <form className="form-user">
                    <div class="form-row">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Nome"/>
                            <input type="password" class="form-control" placeholder="Senha"/>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control" placeholder="Email"/>
                            <input type="password" class="form-control" placeholder="Confirmar Senha"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <button className="btn btn-ivry">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}