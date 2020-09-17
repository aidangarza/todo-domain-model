import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Scrim({ onClick = () => {} }) {
  return <div className="Scrim" onClick={onClick} />;
}

Scrim.propTypes = {
  onClick: PropTypes.func
}
