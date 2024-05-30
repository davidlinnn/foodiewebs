import React from 'react';
import './Footer2.css';

function Footer2() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        <img src= "/images/imgheader.png"></img>
        </div>
      
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Foodie Kelompok 7 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer2;
