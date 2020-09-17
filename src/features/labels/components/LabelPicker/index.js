import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {selectAllLabels} from "../../labelsSlice";
import LabelPill from "../LabelPill";
import './index.css';
import ToDoItem from "../../../../models/ToDoItem";

export default function LabelPicker({ toDoItem, onClick = () => {}}) {
  const labels = useSelector(selectAllLabels);
  const unusedLabels = useMemo(() =>
    labels.filter(label => !toDoItem.labels.includes(label.name)),
    [labels, toDoItem]
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
  toDoItem: PropTypes.instanceOf(ToDoItem).isRequired,
  onClick: PropTypes.func
}
