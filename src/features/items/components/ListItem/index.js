import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Item from "../../../../models/Item";
import './index.css';
import Checkbox from "./components/Checkbox";
import {useDispatch} from "react-redux";
import {update} from '../../itemsSlice';
import NameInput from "../../../../components/NameInput";
import ItemLabelManager from "../ItemLabelManager";

export default function ListItem({ item, adding, onAbort = () => {}, onSave = () => {} }) {
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
        onSave({ ...item, name })
      }
    } else {
      onAbort();
    }
  };

  return (
    <div className="ListItem">
      <span className="ListItem-content">
        <span className="ListItem-title">
          {isEditing ? (
            <NameInput value={name} onChange={handleChange} onBlur={handleDone} autoFocus/>
          ) : (
            <span
              onClick={() => {
                setIsEditing(!item.complete)
              }}
              className={item.complete ? 'ListItem-title__complete' : ''}
            >
              {item.name}
            </span>
          )}
        </span>
        {!adding && <ItemLabelManager item={item} onChange={onSave} />}
      </span>
      {!adding && <Checkbox id={item.id} checked={item.complete} onChange={handleCheck} />}
    </div>
  )
}

ListItem.propTypes = {
  item: PropTypes.instanceOf(Item),
  adding: PropTypes.bool,
  onAbort: PropTypes.func,
  onSave: PropTypes.func
};