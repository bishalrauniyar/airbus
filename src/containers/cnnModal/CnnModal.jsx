import React from 'react';
import './CnnModal.css';
import TestingImageCNN from '../../assets/TestingImageCNN.jpeg';
import TestingImageResultCNN from '../../assets/TestingImageResultCNN.jpeg';

const CnnModal = () => (
  <div className="damageHeader">
    <h1 className="gradient__text">YOLOv8 Based Airplane Video Analysis and Damage Detection Model</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a href="https://cnnbaseddamagedectionmodel.streamlit.app/">
          <img src={TestingImageCNN} alt="input" />
        </a>
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a href="https://cnnbaseddamagedectionmodel.streamlit.app/">
          <img src={TestingImageResultCNN} alt="output" />
        </a>
        <p className="caption">Damage Detection of the Dent indentified with high accuracy </p>
      </div>

    </div>
    <div className="image-container">
      <a href="https://github.com/bishalrauniyar/Aerothon-6.0-Aircraft-Damage-Detection-">
        <p className="caption">🔗Github link:https://github.com/bishalrauniyar/Aerothon-6.0-Aircraft-Damage-Detection-
        </p>
      </a>
    </div>

  </div>
);

export default CnnModal;
