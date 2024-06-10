import Proptypes from 'prop-types';
import React, { useState, useEffect } from 'react';
// import './Typewriter.css'; // Import CSS file for styling
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
        clearInterval(interval); // Clear interval when typing is complete
      }
    }, 100); // Adjust the typing speed as needed

    // Clear interval when component unmounts
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
