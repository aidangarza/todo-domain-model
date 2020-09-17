import React from 'react';
import PropTypes from 'prop-types';
import { add } from "../../itemsSlice";
import {useDispatch} from "react-redux";
import './index.css';
import ToDoList from "../../../../models/ToDoList";

export default function ItemAdder({ toDoList }) {
  const dispatch = useDispatch();

  return (
    <div className="ItemAdder" onClick={() => dispatch(add({ listId: toDoList.id }))}>
      <span>+</span>
    </div>
  );
}

ItemAdder.propTypes = {
  toDoList: PropTypes.instanceOf(ToDoList)
}
