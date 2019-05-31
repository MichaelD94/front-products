import React from 'react';
import "./styles.css";
import logo from '../../assets/marca-completa.png';

const Header = () => <header id="main-header">

<div className='logo'>
     <img src={logo} alt=''></img>
</div>
<div className='actions'>
    <button>Login</button>       
</div>
</header>;


export default Header;