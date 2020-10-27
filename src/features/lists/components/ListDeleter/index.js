import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import List from "../../../../models/List";
import './index.css'
import useApi from "../../../../hooks/useApi";
import Scrim from "../../../../components/Scrim";
import {useDispatch} from "react-redux";
import {remove} from '../../listsSlice';

export default function ListDeleter({ list }) {
  const dispatch = useDispatch();

  const [{ complete, pending }, deleteList] = useApi(List.api.delete);

  useEffect(() => {
    if (complete) {
      dispatch(remove(list));
    }
  }, [complete, list, dispatch]);

  return (
    <>
      <button className="ListDeleter" onClick={() => deleteList(list)}>&times;</button>
      {pending && <Scrim />}
    </>
  );
}

ListDeleter.propTypes = {
  list: PropTypes.instanceOf(List)
};
