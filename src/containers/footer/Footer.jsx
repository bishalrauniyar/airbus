import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const stayInTouch = 'Lets stay in touch';
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src="https://www.airbus.com/themes/custom/airbus_web_experience_ui/logo.svg" alt="Airbus Logo" />
          <p>{stayInTouch}<br /> © AIRBUS 2024.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
          <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</p>
          <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
