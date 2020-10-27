import React from 'react';
import PropTypes from 'prop-types';
import List from "../../../../models/List";
import ListItem from "../ListItem";
import useListItems from "../../hooks/useListItems";

export default function ListItems({ list }) {
  const [{ data: items }] = useListItems({ listId: list.id })

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
