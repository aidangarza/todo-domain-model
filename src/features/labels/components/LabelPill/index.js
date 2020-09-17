import React from 'react';
import PropTypes from 'prop-types';
import Label from "../../../../models/Label";
import './index.css';

export default function LabelPill ({ label, active = false, onClick = () => {} }) {
  return (
    <span
      className={'LabelPill ' + (active ? 'LabelPill__active' : 'LabelPill__inactive')}
      style={{ backgroundColor: label.color, borderColor: label.color, color: label.color }}
      onClick={() => onClick(label)}
    >
      {label.name}
    </span>
  );
}

LabelPill.propTypes = {
  label: PropTypes.instanceOf(Label).isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
};
