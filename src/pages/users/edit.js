import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../components/Header';
import FormUser from '../../components/FormUser';

import './styles.css';


export default class EditUser extends Component{

    render() {
        return (
            <div>
                <Header/>
                <div className="container conteudo">
                    <h4 className="texto-usuarios ">Edição Usuário</h4>
                    <FormUser id={this.props.match.params}/>
                </div>
            </div>
        )
    }
}