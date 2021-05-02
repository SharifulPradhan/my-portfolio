import React from 'react';
import headerBG from '../../../images/header-bg.png';
import './HeaderMain.css'

const HeaderMain = () => {
  return (
    <main>
      <div style={{ height: '100vh' }} className="row d-flex align-items-center">
        <div className="col-md-4 mt-5 bg-danger">
          <h1 className='title'>SHARIFUL PRADHAN <br /> HRIDOY</h1>
          <p style={{ color: '#F35644', fontWeight: '600' }}>React Web Developer</p>
          <a href='https://drive.google.com/u/0/uc?id=1onRfXqMzFAwdXQfc3Ats26E3SLcoqW6Q&export=download' download><button className="button-style">Download Resume</button></a>
        </div>
        <div className="col-md-6">
          <img src={headerBG} alt="" />
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;