import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import ToDoList from "../../models/ToDoList";
import Item from "../Item";
import ItemAdder from "../ItemAdder";
import {useDispatch} from "react-redux";
import { update } from "../../listsSlice";

export default function List({ toDoList }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(!toDoList.name);
  const [name, setName] = useState(toDoList.name);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleDone = () => {
    if (name) {
      setIsEditing(false);
      dispatch(update({ ...toDoList, name }));
    }
  };

  return (
    <div className="List">
      <h1 className="List-name">
        {isEditing ? (
          <input className="List-input" value={name} onChange={handleChange} onBlur={handleDone} />
        ) : (
          toDoList.name
        )}
      </h1>
      {toDoList.items.map(toDoItem => <Item toDoItem={toDoItem} key={toDoItem.id} />)}
      <ItemAdder toDoList={toDoList} />
    </div>
  );
}

List.propTypes = {
  toDoList: PropTypes.instanceOf(ToDoList)
};
