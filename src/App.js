import React from 'react';
import './App.css';
import List from "./features/lists/components/List";
import {useSelector} from "react-redux";
import {selectLists} from "./features/lists/listsSlice";
import ListAdder from "./features/lists/components/ListAdder";

function App() {
  const lists = useSelector(selectLists);

  return (
    <div className="App">
      <div className="App-main">
        {Object.values(lists).map(toDoList => (
          <List toDoList={toDoList} key={toDoList.id} />
        ))}
        <ListAdder />
      </div>
    </div>
  );
}

export default App;
