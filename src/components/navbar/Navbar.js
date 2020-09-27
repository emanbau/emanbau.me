import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../../img/logo.png'

function Navbar() {
    return (
        <div>
            <Router>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to='/' className='navbar-logo'>
                            <img src={logo} alt="logo" className='navbar-logo-emanbau' />
                        </Link>
                        <div className="navbar-menu">
                            
                        </div>
                    </div>
                </nav>
            </Router>
        </div>
    )
}

export default Navbar
