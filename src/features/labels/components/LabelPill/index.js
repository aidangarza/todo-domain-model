import React from 'react';
import PropTypes from 'prop-types';
import Label from "../../../../models/Label";
import './index.css';
import {StyledLabelPill} from "./index.style";

export default function LabelPill ({ label, active = false, onClick = () => {} }) {
  return (
    <StyledLabelPill
      active={active ? 'active' : ''}
      style={{ backgroundColor: label.color, borderColor: label.color, color: label.color }}
      onClick={() => onClick(label)}
    >
      {label.name}
    </StyledLabelPill>
  );
}

LabelPill.propTypes = {
  label: PropTypes.instanceOf(Label).isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func
};
