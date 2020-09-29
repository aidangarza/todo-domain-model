import React from 'react';
import PropTypes from 'prop-types';
import Item from "../../../../models/Item";
import ItemLabelAdder from "../../../items/components/ItemLabelAdder";
import ItemLabels from "../../../labels/components/ItemLabels";
import './index.css';
import {useDispatch} from "react-redux";
import {update} from '../../itemsSlice';

export default function ItemLabelManager({ item }) {
  const dispatch = useDispatch();

  const removeLabel = ({ name }) => {
    const labelNames = item.labelNames.filter(l => l !== name);

    dispatch(update({ ...item, labelNames }));
  };

  return (
    <span className="ItemLabelManager">
      <ItemLabels item={item} onClick={removeLabel} />
      <ItemLabelAdder item={item} />
    </span>
  )
}

ItemLabelManager.propTypes = {
  item: PropTypes.instanceOf(Item).isRequired,
  onClick: PropTypes.func
};
