import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type='button' className='sidebar-show-btn text-white'>
            <i className='fas fa-bars'></i>
          </button>
          <Link to="/" className='navbar-brand flex align-center'>
            
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;