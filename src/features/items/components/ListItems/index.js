import React from 'react';
import PropTypes from 'prop-types';
import List from "../../../../models/List";
import {useSelector} from "react-redux";
import {selectListItems} from "../../itemsSlice";
import ListItem from "../ListItem";

export default function ListItems({ list }) {
  const items = useSelector(selectListItems(list.id));

  return (
    <React.Fragment>
      {items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </React.Fragment>
  )
}

ListItems.propTypes = {
  list: PropTypes.instanceOf(List)
};
