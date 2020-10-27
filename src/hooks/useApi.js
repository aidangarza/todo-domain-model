import { useState, useEffect } from 'react';
import processError from "../util/processError";

export const initialResponse = {
  pristine: true,
  data: null,
  pending: false,
  complete: false,
  error: null
};

export default function useApi(apiFn = i => i, options = {}) {
  // Initialize the response state
  const [response, setResponse] = useState(
    options.initialResponse || initialResponse
  );
  // Initialize the request state
  const [request, setRequest] = useState();

  // Watch for changes in the request to fire off
  // api requests
  useEffect(() => {
    const makeRequest = async _request => {
      if (!_request) return;

      setResponse({
        pristine: false,
        data: null,
        pending: true,
        complete: false,
        error: null
      });

      const { url, ...requestOptions } = _request;
      const rawResponse = await fetch(url, requestOptions);

      if (rawResponse.ok) {
        const data = await rawResponse.json();

        setResponse({
          pristine: false,
          data,
          pending: false,
          complete: true,
          error: null
        });
      } else {
        const error = await processError(rawResponse);

        setResponse({
          pristine: false,
          data: null,
          pending: false,
          complete: true,
          error
        });
      }
    };
    makeRequest(request);
  }, [request]);

  return [
    response,
    (...args) => setRequest(apiFn(...args)),
    () => setResponse(initialResponse)
  ];
}
