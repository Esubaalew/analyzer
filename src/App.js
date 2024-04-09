import React, { useState } from 'react';
import './App.css';
import LiyuRobotIntro from './components/LiyuRobotIntro';
import InfiniteCarousel from './components/InfiniteCarousel';
import { Analytics } from "@vercel/analytics/react";
import Footer from './components/Footer';

function App() {
  const [showCarousel, setShowCarousel] = useState(true);

  return (
    <div className="App">
      <LiyuRobotIntro />
      <div className="navigation-arrow" onClick={() => setShowCarousel(true)}>
        <span>↓</span>
      </div>
      {showCarousel && <InfiniteCarousel />}
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
