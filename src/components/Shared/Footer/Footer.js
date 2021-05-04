import React from 'react';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'


const Footer = () => {
  return (
    <footer className="align-items-center footer-container" style={{height:'300px'}}>

      {/* Brand Column */}
      <div className="container row mx-auto pt-5 footer-brand">
        <div className="col-md-4 col-sm-12 text-white" style={{ textAlign: 'left' }}>
          <img src={logo} alt="" style={{width:'50px'}}/>
          <p>My name is Shariful Pradhan Hridoy. I am a Web Developer, and I'm very passionate and dedicated to my work. With wide experience as a React Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
          <a href="https://www.facebook.com/sharifulpradhanhridoy" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faFacebook} className="mr-3 text-white" /></a>
          <a href="https://www.linkedin.com/in/sharifulhridoy2/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} className="mr-3 text-white" /></a>
          <a href="https://github.com/shariful-pradhan-hridoy" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} className="mr-3 text-white" /></a>
        </div>

        {/* Services Column */}
        <div className="col-md-4 col-sm-12 footer-services">
          <h2>Navigation</h2>
          <li><a href="/">About Us</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="/">Blogs</a></li>
          <li><a href="/">Contacts</a></li>
        </div>

        {/* Contact Column */}
        <div className="col-md-4 col-sm-12 footer-contact text-white">
          <h2>Contacts</h2>
          <p><FontAwesomeIcon icon={faMap} /> Narsingdi Sadar, Narsingdi, Dhaka, Bangladesh</p>
          <p><FontAwesomeIcon icon={faPhone} /> +880 1813 771121</p>
          <a href="mailto:sharifulhridoy01@gmail.com" className="mail text-white"><FontAwesomeIcon icon={faMailBulk} /> sharifulhridoy01@gmail.com</a>
        </div>
      </div>

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