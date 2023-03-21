import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main-header'>
        <div className='maim-header__inner'>
            <div className='main-header__left'>
            <Link to="/login">
                Login
            </Link>
            </div>
            <div>
                <Link to="/">Homepage</Link>
                <Link to ="/register"><h2>Register</h2></Link>
            </div>
            <div className='main-header__right'>
                <button className='btn'>Logout</button>
            </div>


        </div>

    </div>
  )
}

export default Header