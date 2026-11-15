
// import {Link} from "react-router-dom"
// import { useCart } from "../../context/CartContext"
// import { useAuth } from "../../context/AuthContext"

// export default function Navbar(){
//     const {user, logout } = useAuth();
//     const { cartItems } = useCart()
//     const cartCount = cartItems.reduce (
//         (total, item) => total + item.quantity,
//         (0)
//     );
//     return(
//         <nav className="navbar">
//             <div className="navbar-container">
                
//                 <div className="navbar-brand">

//                 <Link to="/" className="navbar-brand" >
//                 <img src="/image/photo_2026-11-01_16-33-52-removebg-preview.png" alt="" />
//                 </Link>
//                 </div>

//                 <div className="navbar-links" >
//                     <Link to="/">
//                 Home
//                 </Link>
//                 <Link to="/checkout">
//                 Cart
//                 {cartCount > 0 && (
//                     <span className="cart-badge">
//                         {cartCount}
//                     </span>
//                 )}
//                 </Link>
//                 </div>
                

//                 {/* <div className="navbar-bars">
//                     <div className="bar1">
//                 <Link to="/about">
//                 About
//                 </Link>
//                     </div>
//                     <div className="bar2">

//                 <Link to="/contact">
//                 Contact 
//                 </Link>
//                     </div>
//                     <div className="bar3">

//                 <Link to="/project">
//                 Project 
//                 </Link>
//                     </div>
//                     <div className="bar4">

//                 <Link to="/services">
//                 Services 
//                 </Link>
//                     </div>
//                 </div> */}


//             <div className="navbar-auth">
//                 {! user ? (

//                 <div className="navbar-auth-links">
//                     <Link to="/auth" className="btn btn-secondary">
//                     Login 
//                     </Link>
//                     <Link to="/auth" className="btn btn-secondary">
//                     Sign Up 
//                     </Link>
//                 </div>
//                 ) : (
//                     <div className="navbar-user">
//                         <span className="navbar-greeting">
//                             Hello, {user.email}
//                         </span>
//                         <button className="btn btn-secondary" onClick={logout}>Logout</button>
//                     </div>

//                 )}
//             </div>
               
                
           
//             </div>
//         </nav>
//     );
// }

import { useState } from "react";
import {Link} from "react-router-dom"
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
export default function Navbar() {
const { user, logout } = useAuth();
const { cartItems } = useCart();
const [menuOpen, setMenuOpen] = useState(false);

const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
);

function closeMenu() {
    setMenuOpen(false);
}

return (
    <nav className="navbar">
        <div className="navbar-container">

            {/* LOGO */}
            <div className="navbar-brand">
                <Link to="/" onClick={closeMenu}>
                    <img
                        src="/image/photo_2026-11-01_16-33-52-removebg-preview.png"
                        alt="ADFEN Logo"
                    />
                </Link>
            </div>

            {/* HAMBURGER BUTTON */}
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* NAVIGATION LINKS */}

                <div className="navbar-links">
                    <Link to="/" onClick={closeMenu}>
                        Home
                    </Link>

                    <Link to="/checkout" onClick={closeMenu}>
                        Cart

                        {cartCount > 0 && (
                            <span className="cart-badge">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* AUTHENTICATION */}
            <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                <div className="navbar-auth">

                    {!user ? (
                        <div className="navbar-auth-links">

                            <Link
                                to="/auth"
                                className="btn btn-secondary"
                                onClick={closeMenu}
                            >
                                Login
                            </Link>

                            <Link
                                to="/auth"
                                className="btn btn-primary"
                                onClick={closeMenu}
                            >
                                Sign Up
                            </Link>

                        </div>
                    ) : (
                        <div className="navbar-user">

                            <span className="navbar-greeting">
                                Hello, {user.email}
                            </span>

                            <button
                                className="btn btn-secondary"
                                onClick={() => {
                                    logout();
                                    closeMenu();
                                }}
                            >
                                Logout
                            </button>

                        </div>
                    )}

                </div>

            </div>

        </div>
    </nav>
);
}