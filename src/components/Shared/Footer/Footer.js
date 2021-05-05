import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="align-items-center">
      {/* CopyRight */}
      <div className="footer-copyright">
        <div className="container d-flex justify-content-between text-white pt-3">
          <p>Shariful Pradhan Hridoy © 2021 All Right Reserved</p> <p>Terms of Service Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;