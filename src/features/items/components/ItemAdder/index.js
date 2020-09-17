import React from 'react';
import PropTypes from 'prop-types';
import { add } from "../../itemsSlice";
import {useDispatch} from "react-redux";
import './index.css';
import List from "../../../../models/List";

export default function ItemAdder({ list }) {
  const dispatch = useDispatch();

  return (
    <div className="ItemAdder" onClick={() => dispatch(add({ listId: list.id }))}>
      <span>+</span>
    </div>
  );
}

ItemAdder.propTypes = {
  list: PropTypes.instanceOf(List)
}
