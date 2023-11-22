import React, { useState } from 'react';

const FontSizeAdjuster = ({ defaultSize }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(10, prevSize - 2));
  };

  return (
    <div>
      <button className='a' onClick={increaseFontSize} style={{ marginRight: '10px' }}>
        Increase
      </button>
      <button className='b' onClick={decreaseFontSize}>Decrease</button>
      <div style={{ fontSize: `${fontSize}px`, marginTop: '10px' }}>
        Text with adjustable size
      </div>
    </div>
  );
};

export default FontSizeAdjuster;
