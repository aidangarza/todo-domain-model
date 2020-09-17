import React from 'react';
import './App.css';
import ListSection from "./features/lists/components/ListSection";
import {useSelector} from "react-redux";
import {selectLists} from "./features/lists/listsSlice";
import ListAdder from "./features/lists/components/ListAdder";

function App() {
  const lists = useSelector(selectLists);

  return (
    <div className="App">
      <div className="App-main">
        {Object.values(lists).map(list => (
          <ListSection list={list} key={list.id} />
        ))}
        <ListAdder />
      </div>
    </div>
  );
}

export default App;
