import React from 'react';
import TmsLogo from '../Images/tms-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navbar'>
      <img src={TmsLogo} alt="TMS Logo" />
      <div>
        <span>
          <Link to="/">TR</Link>
        </span>
        <span>
          <Link to="/en">EN</Link>
        </span>
        <span>
          <Link to="/de">DE</Link>
        </span>
      </div>
    </div>
  )
}

export default Navbar;