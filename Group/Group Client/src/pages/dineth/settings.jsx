import React, { useState } from 'react';
import classNames from 'classnames';

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [textSize, setTextSize] = useState('medium');
  const [isGrayscale, setIsGrayscale] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeTextSize = (size) => {
    setTextSize(size);
  };

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
  };

  const settingsContainerClasses = classNames('settings-container', {
    'dark-mode': isDarkMode,
    'light-mode': !isDarkMode,
  });

  const buttonTextSizeClasses = classNames('button-text-size', {
    'text-small': textSize === 'small',
    'text-medium': textSize === 'medium',
    'text-large': textSize === 'large',
  });

  const buttonGrayscaleClasses = classNames('button-grayscale', {
    grayscale: isGrayscale,
  });

  return (
    <div className={settingsContainerClasses}>
      <p className={buttonTextSizeClasses}>Quotations</p>
      <div className="buttons-container">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={() => changeTextSize('small')}>Small Text</button>
        <button onClick={() => changeTextSize('medium')}>Medium Text</button>
        <button onClick={() => changeTextSize('large')}>Large Text</button>
        <button onClick={toggleGrayscale} className={buttonGrayscaleClasses}>
          {isGrayscale ? 'Remove Greyscale' : 'Apply Greyscale'}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
