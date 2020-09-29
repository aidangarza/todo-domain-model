import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {selectAllLabels} from "../../labelsSlice";
import LabelPill from "../LabelPill";
import './index.css';
import Item from "../../../../models/Item";

export default function LabelPicker({ item, onClick = () => {}}) {
  const labels = useSelector(selectAllLabels);
  const unusedLabels = useMemo(() =>
    labels.filter(label => !item.labelNames.includes(label.name)),
    [labels, item]
  );

  return (
    <ul className="LabelPicker">
      {unusedLabels.map(label => (
        <li key={label.name} className="LabelPicker-item">
          <LabelPill label={label} onClick={onClick} />
        </li>
      ))}
    </ul>
  )
}

LabelPicker.propTypes = {
  item: PropTypes.instanceOf(Item).isRequired,
  onClick: PropTypes.func
}
