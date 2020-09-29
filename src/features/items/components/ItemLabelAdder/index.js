import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import LabelPicker from "../../../labels/components/LabelPicker";
import {useDispatch} from "react-redux";
import {update} from '../../itemsSlice';
import Scrim from "../../../../components/Scrim";
import Item from "../../../../models/Item";

export default function ItemLabelAdder({ item }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const addLabel = ({ name }) => {
    const labelNames = [...item.labelNames, name];
    dispatch(update({ ...item, labelNames }));
  };

  return (
    <span className="ItemLabelAdder">
      <span className="ItemLabelAdder-button" onClick={() => setOpen(!open)}>{open ? <>&times;</> : '+'}</span>
      {open && (
        <>
          <Scrim onClick={() => setOpen(false)} />
          <div className="ItemLabelAdder-picker">
            <LabelPicker item={item} onClick={addLabel} />
          </div>
        </>
      )}
    </span>
  );
}

ItemLabelAdder.propTypes = {
  item: PropTypes.instanceOf(Item)
};
