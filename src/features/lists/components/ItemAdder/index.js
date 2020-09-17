import React from 'react';
import PropTypes from 'prop-types';
import { addItem } from "../../listsSlice";
import {useDispatch} from "react-redux";
import './index.css';
import ToDoList from "../../models/ToDoList";

export default function ItemAdder({ toDoList }) {
  const dispatch = useDispatch();

  return (
    <div className="ItemAdder" onClick={() => dispatch(addItem(toDoList))}>
      <span>+</span>
    </div>
  );
}

ItemAdder.propTypes = {
  toDoList: PropTypes.instanceOf(ToDoList)
}
