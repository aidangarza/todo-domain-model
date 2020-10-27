import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useApi from "../../../hooks/useApi";
import List from "../../../models/List";
import {set, selectLists} from "../listsSlice";
import useLockout from "../../../hooks/useLockout";

export default function useLists({ auto = true } = {}) {
  const [getCheckLockout, lockout] = useLockout('lists');
  // Dispatch from redux...
  const dispatch = useDispatch();
  // Lists from redux...
  const lists = useSelector(selectLists);
  // The useApi hook returns a response object with
  // the properties complete, pending, data, and error;
  // and a function that initiates the HTTP request when
  // it is called.
  const [responseState, getLists] = useApi(List.api.get);
  // On mount, if the response in redux isn't complete,
  // request the lists
  useEffect(() => {
    if (auto && !getCheckLockout() && lists.pristine) {
      lockout();
      getLists();
    }
    // eslint-disable-next-line
  }, []);
  // If the response isn't already complete in redux, update it
  // with each change to the local response state
  useEffect(() => {
    if (
      lists.complete !== responseState.complete ||
      lists.pending !== responseState.pending
    ) {
      dispatch(set(responseState));
    }
  }, [responseState, lists, dispatch]);
  // Return the redux response state
  return [lists, getLists];
}