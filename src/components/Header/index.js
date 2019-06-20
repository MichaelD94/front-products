import React from 'react';
import "./styles.css";
import { LinkContainer } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/marca-completa.png';

const Header = () => 
    // <header id="main-header">

    //     <div className='logo'>
    //         <img src={logo} alt=''></img>
    //     </div>
    //     <div className='actions'>
    //         <button>Login</button>       
    //     </div>
    // </header>;

    <header id="main-header">
        <div className="container">
            <div className="row">
                <div className="link-header col-12 col-md-4">
                    <div className="opt-nav">
                        <a href="http://www.ivoryit.com.br/">
                            Site
                        </a>
                        <Link to={'/users'}>Usuários</Link>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <h1>
                        <Link to={'/'} className="link-img">
                            <img src={logo} alt=''/>
                        </Link>
                    </h1>
                </div>
                <div className="link-header col-12 col-md-4">
                    <div className="opt-nav">
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/user/register'}>Cadastro</Link>
                    </div>
                </div>
            </div>
        </div>
    </header>


export default Header;