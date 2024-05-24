import React from 'react';
import Planemodel from '../../assets/Planemodel.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={Planemodel} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Visualize and Navigate Maintenance Efficiently</h4>
      <h1 className="gradient__text">3D CAD Visualization <br /> for Efficient Damage Repair</h1>
      <p> Our model revolutionizes repair procedures by visualizing the shortest path to damage locations in 3D model of the plane</p>
      <h4>Employing advanced algorithm Dijkstras&apos;s algorithm.
      </h4>
    </div>
  </div>
);

export default Possibility;
