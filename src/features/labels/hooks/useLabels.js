import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useApi from "../../../hooks/useApi";
import {set, selectLabels} from "../labelsSlice";
import Label from "../../../models/Label";
import useLockout from "../../../hooks/useLockout";

export default function useLabels({ auto = true } = {}) {
  const [getCheckLockout, lockout] = useLockout('labels');
  // Dispatch from redux...
  const dispatch = useDispatch();
  // Lists from redux...
  const labels = useSelector(selectLabels);
  // The useApi hook returns a response object with
  // the properties complete, pending, data, and error;
  // and a function that initiates the HTTP request when
  // it is called.
  const [responseState, getLabels] = useApi(Label.api.get);
  // On mount, if the response in redux isn't complete,
  // request the labels
  useEffect(() => {
    if (auto && !getCheckLockout() && labels.pristine) {
      lockout();
      getLabels();
    }
    // eslint-disable-next-line
  }, []);
  // If the response isn't already complete in redux, update it
  // with each change to the local response state
  useEffect(() => {
    if (
      !responseState.pristine && (
        labels.complete !== responseState.complete ||
        labels.pending !== responseState.pending
      )
    ) {
      dispatch(set(responseState));
    }
  }, [responseState, labels, dispatch]);
  // Return the redux response state
  return [labels, getLabels];
}