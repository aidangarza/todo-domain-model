import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { add } from "../../itemsSlice";
import {useDispatch} from "react-redux";
import './index.css';
import useApi from "../../../../hooks/useApi";
import Item from "../../../../models/Item";
import ListItem from "../ListItem";
import List from "../../../../models/List";

export default function ItemAdder({ list }) {
  const dispatch = useDispatch();

  const [item, setItem] = useState(new Item());

  const [isAdding, setIsAdding] = useState(false);

  const [{ complete, data }, createList, resetRequest] = useApi(Item.api.create);

  useEffect(() => {
    if (complete) {
      // Firebase does not return the whole data object on
      // a successful post; so, we have to combine the local
      // name with the "name" (ID!) from the request data.
      dispatch(add({ ...item, id: data.name }));
      setIsAdding(false);
      setItem(new Item());
      resetRequest();
    }
  }, [complete, item, data, dispatch, resetRequest]);

  const handleSave = _savedItem => {
    const savedItem = { ..._savedItem, listId: list.id };

    setItem(savedItem);
    createList(savedItem);
  };

  return isAdding ? (
      <ListItem
        item={item}
        onAbort={() => setIsAdding(false)}
        onSave={handleSave}
        adding
      />
    ) : (
      <div className="ItemAdder" onClick={() => setIsAdding(true)}>
        <span>+</span>
      </div>
    );
}

ItemAdder.propTypes = {
  list: PropTypes.instanceOf(List)
};
