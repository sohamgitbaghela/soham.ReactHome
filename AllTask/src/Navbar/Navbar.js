import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar()
{
    return(
    //   <nav classNameName="navbar navbar-inverse" id="Navbar-content">
    //     <ul classNameName="nav navbar-nav">
    //         <Link to="/"><li>Home</li></Link>
    //         <Link to="/register"><li>Register</li></Link>
    //         <Link to="/login"><li>Login</li></Link>
    //         <Link to="/menu"><li>Menu</li></Link>
    //         <Link to="/menu"><li>About</li></Link>
    //     </ul>
        
    //   </nav>


   <>
   <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid" id="Navbar-content">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/register">Register</Link>
        </li>
        <li className="nav-item">
         <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
            <Link to="/about">About</Link>
        </li>
      </ul>
  </div>
</nav>
   
   </>


       
                
        
    )
}
export default Navbar;


