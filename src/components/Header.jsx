import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";

const Header=()=>{
    return(
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="doList logo"/>
                <h2>do<span>List</span></h2>
            </div>
            <nav className="nav-links">
                <span>About Us</span>
                <span>Features</span>
                <span>More Option</span>
                <span>Contact</span> 
            </nav>

            <div className="nav-buttons">
            <button className="btn-login">Log In</button>
            <button className="btn-signup">Sign Up</button>
            </div>
        </header>
    );
};
export default Header;