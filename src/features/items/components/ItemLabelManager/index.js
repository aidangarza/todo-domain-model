import React from 'react';
import PropTypes from 'prop-types';
import Item from "../../../../models/Item";
import ItemLabelAdder from "../../../items/components/ItemLabelAdder";
import ItemLabels from "../../../labels/components/ItemLabels";
import './index.css';

export default function ItemLabelManager({ item, onChange }) {
  const removeLabel = ({ name }) => {
    const labelNames = item.labelNames.split(',').filter(l => l !== name).join(',');

    onChange({ ...item, labelNames });
  };

  return (
    <span className="ItemLabelManager">
      <ItemLabels item={item} onClick={removeLabel} />
      <ItemLabelAdder item={item} onChange={onChange} />
    </span>
  )
}

ItemLabelManager.propTypes = {
  item: PropTypes.instanceOf(Item).isRequired,
  onClick: PropTypes.func
};
