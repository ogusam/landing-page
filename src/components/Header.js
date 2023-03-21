import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main-header'>
        <div className='maim-header__inner'>
            <div className='main-header__left'>
            <Link to="/">
                Home
            </Link>
            </div>
            <div>
                <Link to ="/register">Register</Link>
            </div>
            <div className='main-header__right'>
                <button className='btn'>Logout</button>
            </div>

        </div>

    </div>
  )
}

export default Header