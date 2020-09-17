import React from 'react';
import PropTypes from 'prop-types';
import Label from "../../../../models/Label";
import './index.css';

export default function LabelPill ({ label }) {
  return <span className="LabelPill" style={{ backgroundColor: label.color }}>{label.name}</span>;
}

LabelPill.propTypes = {
  label: PropTypes.instanceOf(Label)
};
