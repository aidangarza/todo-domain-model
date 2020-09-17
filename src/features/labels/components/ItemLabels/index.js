import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from "../../../../models/ToDoItem";
import {useSelector} from "react-redux";
import {selectItemLabels} from "../../labelsSlice";
import LabelPill from "../LabelPill";

export default function ItemLabels({ toDoItem, onClick }) {
  const labels = useSelector(selectItemLabels(toDoItem.labels));

  return (
    <>
      {labels.map(label =>
        <LabelPill key={label.name} label={label} onClick={onClick} active />
        )}
    </>
  );
}

ItemLabels.propTypes = {
  toDoItem: PropTypes.instanceOf(ToDoItem).isRequired,
  onClick: PropTypes.func
};
