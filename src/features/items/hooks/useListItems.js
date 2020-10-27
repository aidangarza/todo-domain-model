import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useApi from "../../../hooks/useApi";
import {set, selectItems} from "../itemsSlice";
import Item from "../../../models/Item";
import useLockout from "../../../hooks/useLockout";

export default function useListItems({ listId, auto = true } = {}) {
  const [getCheckLockout, lockout] = useLockout('items');
  // Dispatch from redux...
  const dispatch = useDispatch();
  // Lists from redux...
  const items = useSelector(selectItems);
  // The useApi hook returns a response object with
  // the properties complete, pending, data, and error;
  // and a function that initiates the HTTP request when
  // it is called.
  const [responseState, getItems] = useApi(Item.api.get);
  // On mount, if the response in redux isn't complete,
  // request the lists
  useEffect(() => {
    if (auto && !getCheckLockout() && items.pristine) {
      getItems();
    }
    // eslint-disable-next-line
  }, []);
  // If the response isn't already complete in redux, update it
  // with each change to the local response state
  useEffect(() => {
    if (
      items.complete !== responseState.complete ||
      items.pending !== responseState.pending
    ) {
      dispatch(set(responseState));
    }
  }, [responseState, items, dispatch]);
  // Get list items
  const listItems = useMemo(() => {
    return items.data ? Object.values(items.data).filter(item => item.listId === listId) : [];
  }, [items, listId]);
  // Return the redux response state
  return [{ ...items, data: listItems }, getItems];
}