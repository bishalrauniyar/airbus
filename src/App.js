import React from 'react';

import { Footer, Possibility, WhatGPT3, Header } from './containers';
import Navbar from './components/navbar/Navbar';

import './App.css';
import Damage from './containers/damageAssesment/Damage';
import Contact from './containers/contactUs/ContactUs';
import VideoDetection from './containers/videoDetection /VideoDetection';
import CnnModal from './containers/cnnModal/CnnModal';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <CnnModal />
    <Damage />
    <VideoDetection />
    <Contact />
    <Possibility />
    {/* <CTA />
    <Blog /> */}
    <Footer />
    <div className="chatbot">
      <iframe src="https://al-yx.github.io/chatbot/" width="100%" height="500px" title="chatbot" />
    </div>
  </div>
);

export default App;
