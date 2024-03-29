import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { setSidebarOn } from '../../store/SidebarSlice';
import { useSelector } from 'react-redux';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type='button' className='sidebar-show-btn text-white'>
            <i className='fas fa-bars'></i>
          </button>
          <Link to="/" className='navbar-brand flex align-center'>
            <span className='navbar-brand-ico'>
              <i className='fa-solid fa-bag-shopping'></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Snap</span>Up.
            </span>
          </Link>
        </div>
        <div className='navbar-collapse w-100'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type='text' className='form-control fs-14'placeholder='Search your preffered items here' />
              <Link to="" className='text-white search-btn flex align-center justify-center'>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </Link>
            </div> 
          </div>

          <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope'>
            <li className='nav-item no-wrap'>
              <Link to="" className='nav-link text-capitalize'>Category here</Link>
            </li>
          </ul>
        </div>

        <div className='navbar-cart flex align-center'>
          <Link to="/cart" className='cart-btn'>
            <i className='fa-solid fa-card-shopping'></i>
            <div className='cart-items-value'>0</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;