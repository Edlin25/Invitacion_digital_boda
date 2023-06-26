import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to="/" className="nav-links">
                    Katy&MinHo
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/wedding" className="nav-links">
                        Boda
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/our-history" className="nav-links">
                        Nuestra historia
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-links">
                        Registro
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/how-to-get" className="nav-links">
                        Como llegar
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar
