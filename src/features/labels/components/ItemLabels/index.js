import React from 'react';
import PropTypes from 'prop-types';
import Item from "../../../../models/Item";
import LabelPill from "../LabelPill";
import useItemLabels from "../../hooks/useItemLabels";

export default function ItemLabels({ item, onClick }) {
  const [{ data: labels }] = useItemLabels({ labelNames: item.labelNames });

  return (
    <>
      {labels.map(label =>
        <LabelPill key={label.name} label={label} onClick={onClick} active />
        )}
    </>
  );
}

ItemLabels.propTypes = {
  item: PropTypes.instanceOf(Item).isRequired,
  onClick: PropTypes.func
};
