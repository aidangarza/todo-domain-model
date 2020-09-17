import React, {useState} from 'react';
import './index.css';
import LabelPicker from "../../../labels/components/LabelPicker";
import {useDispatch} from "react-redux";
import {update} from '../../itemsSlice';

export default function ItemLabelAdder({ toDoItem }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const addLabel = ({ name }) => {
    const labels = [...toDoItem.labels, name];
    dispatch(update({ ...toDoItem, labels }));
  };

  return (
    <span className="ItemLabelAdder">
      <span className="ItemLabelAdder-button" onClick={() => setOpen(!open)}>{open ? <>&times;</> : '+'}</span>
      {open && (
        <div className="ItemLabelAdder-picker">
          <LabelPicker toDoItem={toDoItem} onClick={addLabel} />
        </div>
      )}
    </span>
  );
}
