import React from 'react';
import '../styles/navbar.css';

function Navbar() 
{
    return(
        <div className="navbar-container">
            <div className="navbar-sitename">
                <h3>GROOVE STRING HUB</h3>
            </div>
            <div className="navbar-options">
                <ul>
                    <li className="navbar-option-list-items">
                        Blog Section
                    </li>
                    <li className="navbar-option-list-items">
                        Bassist's Gallery
                    </li>
                    <li className="navbar-option-list-items">
                        Member's wall
                    </li>
                </ul>
            </div>
            <div className="navbar-login">
                <p>Login</p>
            </div>
        </div>
    );
  }

export default Navbar;