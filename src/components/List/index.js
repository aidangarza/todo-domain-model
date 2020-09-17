import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import ToDoList from "../../models/ToDoList";
import Item from "../Item";

export default function List({ toDoList }) {
  return (
    <div className="List">
      <h1 className="List-name">{toDoList.name}</h1>
      {toDoList.items.map(toDoItem => <Item toDoItem={toDoItem} key={toDoItem.name} />)}
    </div>
  );
}

List.propTypes = {
  toDoList: PropTypes.instanceOf(ToDoList)
};
