import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useApi from "../../../hooks/useApi";
import {set, selectItems} from "../itemsSlice";
import Item from "../../../models/Item";
import useLockout from "../../../hooks/useLockout";

export default function useItems({ listId, auto = true } = {}) {
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
      lockout();
      getItems();
    }
    // eslint-disable-next-line
  }, []);
  // If the response isn't already complete in redux, update it
  // with each change to the local response state
  useEffect(() => {
    if (
      !responseState.pristine && (
        items.complete !== responseState.complete ||
        items.pending !== responseState.pending
      )
    ) {
      dispatch(set(responseState));
    }
  }, [responseState, items, dispatch]);
  // Return the redux response state
  return [items, getItems];
}