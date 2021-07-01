import React from 'react'
import logo from "../wefri.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <img className="logo" src={logo} alt="logo"></img>
                <div className="container">
                    {/* <a className="navbar-brand" href="#">We-fri Entertainment</a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html#about">Video Production</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html#services">Documentary</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html#experience">Music Production</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html#portfolio">Portfolios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html#contact">contact Us</a>
                        </li>                        
                        </ul>
                    
                    </div>
                </div>                
            </nav>
        </div>
    )
}

export default NavBar
