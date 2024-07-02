import Proptypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import '../styles/styles.css';
const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); 
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentIndex, text]);

  return (
    <span className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

Typewriter.propTypes = {
  text: Proptypes.string.isRequired,
};
export default Typewriter;
