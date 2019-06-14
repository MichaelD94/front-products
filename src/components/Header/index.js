import React from 'react';
import "./styles.css";
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
                <div className="col-12 col-md-4">
                    <div className="opt-nav">
                        <a href="http://www.ivoryit.com.br/">
                            Site
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                    <h1>
                        <a href="#" className="link-img">
                            <img src={logo} alt=''/>
                        </a>
                    </h1>
                </div>
                <div className="col-12 col-md-4">
                    <div className="opt-nav">
                        <a href="#">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>


export default Header;