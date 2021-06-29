import React from 'react';
import './App.css';
import ListUpdater from "./features/lists/components/ListUpdater";
import ListAdder from "./features/lists/components/ListAdder";
import useLists from "./features/lists/hooks/useLists";

function App() {
  const [{ data: lists }] = useLists();

  return (
    <div className="App">
      <div className="App-inner">
        {Object.values(lists || {}).map(list => (
          <ListUpdater list={list} key={list.id} />
        ))}
        <ListAdder />
      </div>
    </div>
  );
}

export default App;
