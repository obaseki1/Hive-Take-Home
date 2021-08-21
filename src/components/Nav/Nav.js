import React from 'react';
import logo from '../../assets/hive.svg';
import './Nav.css';

function Nav() {
  return (
    <div className="nav-container">
      <div className="nav">
        <img className="hive-img" src={logo} />
        <div className="nav-right">
          <span style={{fontSize:14, fontWeight:'600'}}>SIGN UP</span>
          <button className="nav-cta">LOG IN</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
