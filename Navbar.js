import React from "react";
import Status from "./Status";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        //navigation bat for the user to log in, sign up and go to his profile
        <nav className="navbar">
            <h1>BetterYelp</h1>
            
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="login" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Log in</Link>
                <Link to="signup" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Sign up</Link>
                <Link to="settings" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Settings</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;