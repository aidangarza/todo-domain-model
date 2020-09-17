import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import ToDoList from "../../../../models/ToDoList";
import ItemAdder from "../../../items/components/ItemAdder";
import {useDispatch} from "react-redux";
import { update } from "../../listsSlice";
import ListItems from "../../../items/components/ListItems";
import NameInput from "../../../../components/NameInput";

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

      if (name !== toDoList.name) {
        dispatch(update({ ...toDoList, name }));
      }
    }
  };

  return (
    <div className="List">
      <h1 className="List-name">
        {isEditing ? (
          <NameInput value={name} onChange={handleChange} onBlur={handleDone} autoFocus />
        ) : (
          <span onClick={() => setIsEditing(true)}>{toDoList.name}</span>
        )}
      </h1>
      <ListItems toDoList={toDoList} />
      <ItemAdder toDoList={toDoList} />
    </div>
  );
}

List.propTypes = {
  toDoList: PropTypes.instanceOf(ToDoList)
};
