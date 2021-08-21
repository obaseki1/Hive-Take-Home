import React, {useState} from 'react';
import logo from '../../assets/hive.svg';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
   
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-left">
          <Link to="/">
            <img className="hive-img" src={logo} />
          </Link>
        </div>

        <div
          style={{
         //   display: mobileMenu ? 'none' : 'none',
          }}
          className="nav-right"
        >
          
          <Link to="/dropdown">
            <button className="nav-cta">Dropdown</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
