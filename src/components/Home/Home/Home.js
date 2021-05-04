import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
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
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;