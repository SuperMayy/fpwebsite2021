import React from 'react'
import './generalStyle.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <Link to="/">
              <h1 className="logo"><span>+</span>FIONITA’S PROJECT</h1>
            </Link>
            <ul className="header-links">
                <Link to="/"><li>Home</li></Link>
                <Link to="/our-work"><li>Our Work</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <button className="donate">Donate</button>
        </nav>

    )
}

export default Header;