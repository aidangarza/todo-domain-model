import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ToDoItem from "../../../../models/ToDoItem";
import './index.css';
import Checkbox from "./components/Checkbox";
import {useDispatch} from "react-redux";
import {update} from '../../itemsSlice';
import NameInput from "../../../../components/NameInput";
import ItemLabelManager from "../ItemLabelManager";

export default function Item({ toDoItem }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(!toDoItem.name);
  const [name, setName] = useState(toDoItem.name);

  const handleCheck = ({ target }) => {
    dispatch(update({...toDoItem, complete: target.checked}));
  };

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleDone = () => {
    if (name) {
      setIsEditing(false);

      if (name !== toDoItem.name) {
        dispatch(update({ ...toDoItem, name }));
      }
    }
  };

  return (
    <div className="Item">
      <span className="Item-content">
        <span className="Item-title">
          {isEditing ? (
            <NameInput value={name} onChange={handleChange} onBlur={handleDone} autoFocus/>
          ) : (
            <span
              onClick={() => {
                setIsEditing(!toDoItem.complete)
              }}
              className={toDoItem.complete ? 'Item-title__complete' : ''}
            >
              {toDoItem.name}
            </span>
          )}
        </span>
        <ItemLabelManager toDoItem={toDoItem} />
      </span>
      <Checkbox id={toDoItem.id} checked={toDoItem.complete} onChange={handleCheck} />
    </div>
  )
}

Item.propTypes = {
  toDoItem: PropTypes.instanceOf(ToDoItem)
};