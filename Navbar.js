import React from 'react';

function Navbar({ onHome, onAbout, onContact }) {
    return (
      <nav>
        <h1>SEANFLIX</h1>  
        <a href="#" onClick={onHome}>Home</a>
        <a href="#" onClick={onAbout}>About</a>
        <a href="#" onClick={onContact}>Contact</a>
      </nav>
    );
  }

export default Navbar;