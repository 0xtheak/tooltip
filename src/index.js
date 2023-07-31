import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

import './index.css'; 



const App = () => {
  const [showTT, setShowTT] = useState(false);
  // default position  of tooltip
  const [position, setPosition] = useState('top'); 

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  return (<>
      <div className={`tooltip ${position}`} onMouseEnter={() => setShowTT(true)} onMouseLeave={() => setShowTT(false)}>
        <button className='hover-on-me'>Hover over me!</button>
        {showTT && <div className={`hovering-tooltip ${position}`}><p>Thanks for hovering over me! I'm Tooltip</p></div>}
      </div>
      <div className='position-buttons'>
        <button onClick={()=> handlePositionChange('top')}>Top</button>
        <button onClick={()=> handlePositionChange('bottom')}>Bottom</button>
        <button onClick={()=> handlePositionChange('right')}>Right</button>
        <button onClick={()=> handlePositionChange('left')}>Left</button>
        
        <h3>Select the tooltip hovering position</h3>
      </div>
    </>);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
