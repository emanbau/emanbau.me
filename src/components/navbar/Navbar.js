import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import './Navbar.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Sidebar } from './Sidebar';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <div>
            <Router>
                <div className="navbar">
                    <div className="navbar-container">
                        <Link to='/' className='navbar-logo'>
                            <img src={logo} alt="logo" className='navbar-logo-emanbau' />
                        </Link>
                        <Link to='/' className="navbar-bars">
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                    </div>
                    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {Sidebar.map((item, index) => {
                                return(
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Navbar
