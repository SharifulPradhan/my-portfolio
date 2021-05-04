import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;