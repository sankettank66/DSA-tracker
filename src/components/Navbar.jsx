import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  function toggleMenu() {
    var navLeft = document.querySelector('.Nav-left');
    var navRight = document.querySelector('.Nav-right');

    navLeft.classList.toggle('show-menu');
    navRight.classList.toggle('show-menu');
  }

  return (
    <React.Fragment>
    <nav>
      <div className="Nav-left">
        <Link to='/'>
        <div id="home">Home</div>
        </Link>
        <Link to='/problems'>
        <div>
          Problems
        </div>
        </Link>
        <Link to='/aboutUs'>
        <div id="about-us">About Us</div>
        </Link>
        
      </div>
      <div className="Nav-right">
        <Link to='/login'>
        <div>Login</div>
        </Link>
        <Link to='/signup'>
        <div>Register</div>
        </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </div>
      </div>
    </nav>
    </React.Fragment>
  );
}

export default Navbar;
