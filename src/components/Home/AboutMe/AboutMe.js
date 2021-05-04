import React from 'react';
import desktop from '../../../images/desktop.png'
import heartBeat from '../../../images/heartbeat.png'
import direct from '../../../images/direct.png'
import SpecialitiesCard from '../SpecialitiesCard/SpecialitiesCard';
import aboutMeIMG from '../../../images/about-me-img.png'

const AboutMe = () => {
  const specialities = [{
    id: 1,
    icon: desktop,
    title: 'Web Development',
    description: 'I am an expert in React. I can develop a fully functional website from start to finish...',
  }, {
    id: 2,
    icon: heartBeat,
    title: 'Web Design',
    description: 'Web design is a similar process of creation, with the intention of presenting...',
  }, {
    id: 3,
    icon: direct,
    title: 'MERN Stack',
    description: 'I have a good knowledge of setup databases using MongoDB, Express.',
  },]
  return (
    <section style={{ height: '790px'}}>
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
          <a href='https://drive.google.com/u/0/uc?id=1onRfXqMzFAwdXQfc3Ats26E3SLcoqW6Q&export=download' download><button className="button-style">Download Resume</button></a>
        </div>
      </div>
      <div  className="container  d-flex align-items-center">
        {
          specialities.map(speciality => <SpecialitiesCard speciality={speciality} key={speciality.id} />)
        }
        
      </div>
    </section>
  );
};

export default AboutMe;