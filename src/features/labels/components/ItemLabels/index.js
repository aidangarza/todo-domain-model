import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from "../../../../models/ToDoItem";
import {useSelector} from "react-redux";
import {selectItemLabels} from "../../labelsSlice";
import LabelPill from "../LabelPill";
import ItemLabelAdder from "../../../items/components/ItemLabelAdder";
import './index.css';

export default function ItemLabels({ toDoItem }) {
  const labels = useSelector(selectItemLabels(toDoItem.labels));

  return (
    <span className="ItemLabels">
      {labels.map(label => <LabelPill label={label} />)}
      <ItemLabelAdder toDoItem={toDoItem} />
    </span>
  )
}

ItemLabels.propTypes = {
  toDoItem: PropTypes.instanceOf(ToDoItem)
};
