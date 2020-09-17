import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from "../../../../models/ToDoItem";
import ItemLabelAdder from "../../../items/components/ItemLabelAdder";
import ItemLabels from "../../../labels/components/ItemLabels";
import './index.css';
import {useDispatch} from "react-redux";
import {update} from '../../itemsSlice';

export default function ItemLabelManager({ toDoItem }) {
  const dispatch = useDispatch();

  const removeLabel = ({ name }) => {
    const labels = toDoItem.labels.filter(l => l !== name);

    dispatch(update({ ...toDoItem, labels }));
  };

  return (
    <span className="ItemLabelManager">
      <ItemLabels toDoItem={toDoItem} onClick={removeLabel} />
      <ItemLabelAdder toDoItem={toDoItem} />
    </span>
  )
}

ItemLabelManager.propTypes = {
  toDoItem: PropTypes.instanceOf(ToDoItem).isRequired,
  onClick: PropTypes.func
};
