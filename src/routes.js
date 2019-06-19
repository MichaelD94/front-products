import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main';
import Product from './pages/product';
import Users from './pages/users';
import CadastroUser from './pages/users/cadastro';
import Login from './pages/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/products/:id' component={Product} />
            <Route path='/users' component={Users} />
            <Route path='/user/cadastro/' component={CadastroUser} />
            <Route path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;