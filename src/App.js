import React, {useState} from 'react';
import './App.css';
import ListSection from "./features/lists/components/ListSection";
import ListAdder from "./features/lists/components/ListAdder";
import useLists from "./features/lists/hooks/useLists";

function App() {
  const [{ data: lists }] = useLists();

  return (
    <div className="App">
      <div className="App-main">
        {Object.values(lists || {}).map(list => (
          <ListSection list={list} key={list.id} />
        ))}
        <ListAdder />
      </div>
    </div>
  );
}

export default App;
