import React from 'react';
import logo from '../../../assets/images/gifmeme-icon.png';

const NavbarMeme = () => {
    return(
        <nav className="navbar nav-style" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <img className="navbar-item" src={logo} alt="" width="80" height="60" />
            </div>
            <h3 className="navbar-item title is-3 nav-title">MOTION MEME ADVISOR</h3>
        </nav>
    );
}
 
export default NavbarMeme;