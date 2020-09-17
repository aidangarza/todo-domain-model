import React, {useState} from 'react';
import './App.css';
import List from "./components/List";
import sample from './fixtures/ToDoList-sample';

function App() {
  const [lists, setLists] = useState([sample]);

  return (
    <div className="App">
      <div className="App-main">
        {lists.map(toDoList => <List toDoList={toDoList} key={toDoList.name} />)}
      </div>
    </div>
  );
}

export default App;
