import React from 'react';
import PropTypes from 'prop-types';
import ToDoList from "../../../../models/ToDoList";
import {useSelector} from "react-redux";
import {selectListItems} from "../../itemsSlice";
import Item from "../Item";

export default function ListItems({ toDoList }) {
  const items = useSelector(selectListItems(toDoList.id));

  return (
    <React.Fragment>
      {items.map(item => (
        <Item toDoItem={item} key={item.id} />
      ))}
    </React.Fragment>
  )
}

ListItems.propTypes = {
  toDoList: PropTypes.instanceOf(ToDoList)
};
