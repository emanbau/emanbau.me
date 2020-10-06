import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Navbar.css';
import logo from './emanbaulogo.png';
import bars from './bars.png';
import * as AiIcons from "react-icons/ai";


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <div>
            <Router>
                <div className="navbar">
                    <Link to='/' className='navbar-logo' >
                        <img src={logo} alt="logo" className='navbar-logo-emanbau' />
                    </Link>
                    <Link to='/' className="navbar-bars">
                            <img src={bars} alt='bars' onClick={showSidebar}/>
                    </Link>
                    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            <li className="item-link">About</li>
                            <li className="item-link">Contact</li>
                            <li className="item-link">Portfolio</li>
                            <li className="item-link">Projects</li>
                        </ul>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Navbar
