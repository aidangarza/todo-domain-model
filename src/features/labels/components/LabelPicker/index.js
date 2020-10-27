import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import LabelPill from "../LabelPill";
import './index.css';
import Item from "../../../../models/Item";
import useLabels from "../../hooks/useLabels";

export default function LabelPicker({ item, onClick = () => {}}) {
  const [{ data: labels }] = useLabels();

  const unusedLabels = useMemo(() =>
    Object.values(labels || {}).filter(label => !item.labelNames.includes(label.name)),
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
