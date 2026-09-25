import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                
                <div className="navbar-brand">

                <Link to="/" className="navbar-brand" >
                Adfen
                </Link>
                </div>

                <div className="navbar-bars">
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
                </div>
               
                
           
            </div>
        </nav>
    );
}