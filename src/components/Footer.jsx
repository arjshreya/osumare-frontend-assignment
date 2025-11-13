import React from "react";
import "./Footer.css"

const Footer =()=>{
    return(
        <footer className="footer">
            <h2>Start Organizing Your Life Today</h2>
            <p>Join thousands of users improving their productivity with doList. </p>
            <div className="footer-btns">
                <button className="btn-primary">Get Started</button>
                <button className="btn-outline">Learn More</button>
            </div>
            <p className="copyright">© 2025 doList | All Rights Reserved</p>
        </footer>
    );
};
export default Footer;