import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Item from "../../../../models/Item";
import './index.css';
import Checkbox from "./components/Checkbox";
import {useDispatch} from "react-redux";
import {update} from '../../itemsSlice';
import NameInput from "../../../../components/NameInput";
import ItemLabelManager from "../ItemLabelManager";

export default function ListItem({ item }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(!item.name);
  const [name, setName] = useState(item.name);

  const handleCheck = ({ target }) => {
    dispatch(update({...item, complete: target.checked}));
  };

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleDone = () => {
    if (name) {
      setIsEditing(false);

      if (name !== item.name) {
        dispatch(update({ ...item, name }));
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
                setIsEditing(!item.complete)
              }}
              className={item.complete ? 'Item-title__complete' : ''}
            >
              {item.name}
            </span>
          )}
        </span>
        <ItemLabelManager item={item} />
      </span>
      <Checkbox id={item.id} checked={item.complete} onChange={handleCheck} />
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.instanceOf(Item)
};