import React from 'react';
import './index.css';

export default function Checkbox(props) {
  const { id = Math.random() * 999999999 } = props;

  return (
    <label className="Checkbox" htmlFor={id}>
      <input {...props} type="checkbox" className="Checkbox-input" id={id} />
      <span className="Checkbox-circle">
        <span className="Checkbox-check">&#10004;</span>
      </span>
    </label>
  )
}
