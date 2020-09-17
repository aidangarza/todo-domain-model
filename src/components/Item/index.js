import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import ToDoItem from "../../models/ToDoItem";
import './index.css';
import LabelPill from "../LabelPill";
import Checkbox from "./components/Checkbox";

export default function Item({ toDoItem }) {
  const id = useMemo(() => toDoItem.name.replace(' ', '-'), [toDoItem]);

  return (
    <div className="Item">
      <span className="Item-content">
        <span className="Item-title">{toDoItem.name}</span>
        {toDoItem.labels.map(label => <LabelPill label={label} key={label.name} />)}
      </span>
      <Checkbox id={id} checked={toDoItem.complete} />
    </div>
  )
}

Item.propTypes = {
  toDoItem: PropTypes.instanceOf(ToDoItem)
};