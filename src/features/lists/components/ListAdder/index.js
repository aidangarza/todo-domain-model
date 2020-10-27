import React, {useEffect, useState} from 'react';
import './index.css';
import ListSection from "../ListSection";
import List from "../../../../models/List";
import useApi from "../../../../hooks/useApi";
import Scrim from "../../../../components/Scrim";
import {useDispatch} from "react-redux";
import {add} from '../../listsSlice';

export default function ListAdder() {
  const dispatch = useDispatch();

  const [list, setList] = useState(new List());

  const [isAdding, setIsAdding] = useState(false);

  const [{ pending, complete, data }, createList, resetRequest] = useApi(List.api.create);

  useEffect(() => {
    if (complete) {
      // Firebase does not return the whole data object on
      // a successful post; so, we have to combine the local
      // name with the "name" (ID!) from the request data.
      dispatch(add({ id: data.name, name: list.name }));
      setIsAdding(false);
      setList(new List());
      resetRequest();
    }
  }, [complete, list, data, dispatch]);

  const handleSave = savedList => {
    setList(savedList);
    createList(savedList);
  };

  return (
    <>
      {isAdding ? (
        <ListSection
          list={list}
          onAbort={() => setIsAdding(false)}
          onSave={handleSave}
        />
      ) : (
      <div className="ListAdder" onClick={() => setIsAdding(true)}>+</div>
      )}
      {pending && <Scrim />}
    </>
  );
}
