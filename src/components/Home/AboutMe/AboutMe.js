import React from 'react';
import aboutMeIMG from '../../../images/about-me-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => {
  return (
    <section style={{ height: '550px'}}>
      <div className="container  d-flex align-items-center">
        <div className="p-5 col-md-6 col-sm-12">
        <img src={aboutMeIMG} alt="" className='border rounded img-fluid'/>
        </div>
        <div className="p-5 text-left col-md-6 col-sm-12">
          <h3>SHARIFUL PRADHAN HRIDOY</h3>
          <p style={{ color: '#F35644', fontWeight: '600' }}>React Developer</p>
          <hr />
          <p>My name is Shariful Pradhan Hridoy. I am a Web Developer, and I'm very passionate and dedicated to my work.
        <br />
        With wide experience as a React Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
          <div className="text-left align-items-center">
          <a href='https://drive.google.com/u/0/uc?id=1onRfXqMzFAwdXQfc3Ats26E3SLcoqW6Q&export=download' download><button className="button-style">Download Resume</button></a>
          <br/>
          <a href="https://www.linkedin.com/in/sharifulhridoy2/" target="_blank" rel='noreferrer' style={{fontSize:'36px'}}><FontAwesomeIcon icon={faLinkedin} className="ml-3 text-dark" /></a>
          <a href="https://github.com/shariful-pradhan-hridoy" target="_blank" rel='noreferrer' style={{fontSize:'36px'}}><FontAwesomeIcon icon={faGithub} className="ml-3 text-dark" /></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;