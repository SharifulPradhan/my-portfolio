import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div style={{height: '100vh'}}>
      <Header />
      <AboutMe />
    </div>
  );
};

export default Home;