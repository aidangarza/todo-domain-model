import React from 'react';
import { add } from "../../listsSlice";
import {useDispatch} from "react-redux";
import './index.css';

export default function ListAdder() {
  const dispatch = useDispatch();

  return <div className="ListAdder" onClick={() => dispatch(add())}>+</div>;
}
