import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import List from "../../../../models/List";
import ItemAdder from "../../../items/components/ItemAdder";
import {useDispatch} from "react-redux";
import { update } from "../../listsSlice";
import ListItems from "../../../items/components/ListItems";
import NameInput from "../../../../components/NameInput";

export default function ListSection({ list }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(!list.name);
  const [name, setName] = useState(list.name);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleDone = () => {
    if (name) {
      setIsEditing(false);

      if (name !== list.name) {
        dispatch(update({ ...list, name }));
      }
    }
  };

  return (
    <div className="ListSection">
      <h1 className="ListSection-name">
        {isEditing ? (
          <NameInput value={name} onChange={handleChange} onBlur={handleDone} autoFocus />
        ) : (
          <span onClick={() => setIsEditing(true)}>{list.name}</span>
        )}
      </h1>
      <ListItems list={list} />
      <ItemAdder list={list} />
    </div>
  );
}

ListSection.propTypes = {
  list: PropTypes.instanceOf(List)
};
