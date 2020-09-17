import React from 'react';
import PropTypes from 'prop-types';
import Item from "../../../../models/Item";
import {useSelector} from "react-redux";
import {selectItemLabels} from "../../labelsSlice";
import LabelPill from "../LabelPill";

export default function ItemLabels({ item, onClick }) {
  const labels = useSelector(selectItemLabels(item.labels));

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
