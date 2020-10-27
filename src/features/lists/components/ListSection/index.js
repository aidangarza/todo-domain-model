import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import List from "../../../../models/List";
import ItemAdder from "../../../items/components/ItemAdder";
import ListItems from "../../../items/components/ListItems";
import NameInput from "../../../../components/NameInput";
import ListDeleter from "../ListDeleter";

export default function ListSection({ list, onAbort = () => {}, onSave = () => {} }) {
  const [isEditing, setIsEditing] = useState(!list.name);
  const [name, setName] = useState(list.name);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleDone = () => {
    if (name) {
      setIsEditing(false);

      if (name !== list.name) {
        onSave({ ...list, name });
      }
    } else {
      onAbort();
    }
  };

  return (
    <div className="ListSection">
      {/* Ignore this! Just want to make the demo data stay... */}
      {list.id !== 'grocerylist' && <ListDeleter list={list} />}
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
  list: PropTypes.instanceOf(List),
  onAbort: PropTypes.func,
  onSave: PropTypes.func
};
