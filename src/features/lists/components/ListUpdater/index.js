import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ListSection from "../ListSection";
import List from "../../../../models/List";
import useApi from "../../../../hooks/useApi";
import Scrim from "../../../../components/Scrim";
import {useDispatch} from "react-redux";
import {update} from '../../listsSlice';

export default function ListUpdater({ list }) {
  const dispatch = useDispatch();

  const [{ pending, complete, data }, updateList, resetRequest] = useApi(List.api.update);

  useEffect(() => {
    if (complete) {
      // Firebase does not return the whole data object on
      // a successful post; so, we have to combine the local
      // name with the "name" (ID!) from the request data.
      dispatch(update({ ...data, id: list.id }));
      resetRequest();
    }
  }, [complete, list, data, dispatch, resetRequest]);

  const handleSave = savedList => {
    updateList(savedList);
  };

  return (
    <>
      <ListSection
        list={list}
        onSave={handleSave}
      />
      {pending && <Scrim />}
    </>
  );
}

ListUpdater.propTypes = {
  list: PropTypes.instanceOf(List)
};
