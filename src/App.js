import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LandingPage from './components/landingPage';
// import ModelViewer from './components/modelViewer';

const App = () => (
  <Router>
    <div>
      <Routes>
        {/* <Route path="/modelViewer" element={<ModelViewer />} /> */}
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  </Router>
);

export default App;
