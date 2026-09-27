// import { useContext } from "react";
import {Link} from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function Navbar(){
    const {user, logout } = useAuth();
    return(
        <nav className="navbar">
            <div className="navbar-container">
                
                <div className="navbar-brand">

                <Link to="/" className="navbar-brand" >
                Adfen
                </Link>
                </div>

                {/* <div className="navbar-bars">
                    <div className="bar1">
                <Link to="/about">
                About
                </Link>
                    </div>
                    <div className="bar2">

                <Link to="/contact">
                Contact 
                </Link>
                    </div>
                    <div className="bar3">

                <Link to="/project">
                Project 
                </Link>
                    </div>
                    <div className="bar4">

                <Link to="/services">
                Services 
                </Link>
                    </div>
                </div> */}


            <div className="navbar-auth">
                {! user ? (

                <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-secondary">
                    Login 
                    </Link>
                    <Link to="/auth" className="btn btn-secondary">
                    Sign Up 
                    </Link>
                </div>
                ) : (
                    <div className="navbar-user">
                        <span className="navbar-greeting">
                            Hello, {user.email}
                        </span>
                        <button className="btn btn-secondary" onClick={logout}>Logout</button>
                    </div>

                )}
            </div>
               
                
           
            </div>
        </nav>
    );
}