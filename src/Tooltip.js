import React from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css'; // Create a separate CSS file for styling the tooltip

const Tooltip = ({ position, children, text }) => {
  const tooltipStyle = {
    top: position === 'top' ? '-40px' : '',
    bottom: position === 'bottom' ? '-40px' : '',
    left: position === 'left' ? '-80px' : '',
    right: position === 'right' ? '-80px' : '',
  };

  return (
    <div className="tooltip-container" style={tooltipStyle}>
      <div className={`tooltip tooltip-${position}`}>{text}</div>
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Tooltip;
