import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './index.css';
import LabelPicker from "../../../labels/components/LabelPicker";
import Scrim from "../../../../components/Scrim";
import Item from "../../../../models/Item";

export default function ItemLabelAdder({ item, onChange }) {
  const [open, setOpen] = useState(false);

  const addLabel = ({ name }) => {
    const labelNames = item.labelNames ? item.labelNames + ',' + name : name;
    onChange({ ...item, labelNames });
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
