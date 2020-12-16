import React from 'react';
import ListUpdater from "./features/lists/components/ListUpdater";
import ListAdder from "./features/lists/components/ListAdder";
import useLists from "./features/lists/hooks/useLists";
import {StyledApp, StyledAppMain} from "./App.style";

function App() {
  const [{ data: lists }] = useLists();

  return (
    <StyledApp>
      <StyledAppMain>
        {Object.values(lists || {}).map(list => (
          <ListUpdater list={list} key={list.id} />
        ))}
        <ListAdder />
      </StyledAppMain>
    </StyledApp>
  );
}

export default App;
