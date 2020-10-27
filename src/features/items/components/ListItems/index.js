import React from 'react';
import PropTypes from 'prop-types';
import List from "../../../../models/List";
import ListItemUpdater from "../ListItemUpdater";
import useListItems from "../../hooks/useListItems";

export default function ListItems({ list }) {
  const [{ data: items }] = useListItems({ listId: list.id })

  return (
    <React.Fragment>
      {items.map(item => (
        <ListItemUpdater item={item} key={item.id} />
      ))}
    </React.Fragment>
  )
}

ListItems.propTypes = {
  list: PropTypes.instanceOf(List)
};
