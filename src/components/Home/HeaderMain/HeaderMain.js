import React from 'react';
import headerBG from '../../../images/header-bg.png';
import './HeaderMain.css'

const HeaderMain = () => {
  return (
    <main>
      <div className="row d-flex align-items-center header-container">
        <div className="col-md-4 col-sm-12 mt-5 header-content">
          <h1 className='title'>SHARIFUL PRADHAN <br /> HRIDOY</h1>
          <h3 style={{ color: '#F35644', fontWeight: '600' }}>React Developer</h3>
          <a href='https://drive.google.com/u/0/uc?id=1onRfXqMzFAwdXQfc3Ats26E3SLcoqW6Q&export=download' download><button className="button-style">Download Resume</button></a>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={headerBG} alt="" className="header-image"/>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;