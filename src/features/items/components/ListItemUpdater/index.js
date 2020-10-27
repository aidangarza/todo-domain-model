import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ListItem from "../ListItem";
import useApi from "../../../../hooks/useApi";
import Scrim from "../../../../components/Scrim";
import {useDispatch} from "react-redux";
import {update} from '../../itemsSlice';
import Item from "../../../../models/Item";

export default function ListItemUpdater({ item }) {
  const dispatch = useDispatch();

  const [{ pending, complete, data }, updateItem, resetRequest] = useApi(Item.api.update);

  useEffect(() => {
    if (complete) {
      // Firebase does not return the whole data object on
      // a successful post; so, we have to combine the local
      // name with the "name" (ID!) from the request data.
      dispatch(update({ ...data, id: item.id }));
      resetRequest();
    }
  }, [complete, item, data, dispatch, resetRequest]);

  const handleSave = savedItem => {
    updateItem(savedItem);
  };

  return (
    <>
      <ListItem
        item={item}
        onSave={handleSave}
      />
      {pending && <Scrim />}
    </>
  );
}

ListItemUpdater.propTypes = {
  list: PropTypes.instanceOf(Item)
};
