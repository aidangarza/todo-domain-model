import ToDoList from "../../../models/ToDoList";
import uuid from "../../../util/uuid";

export default ToDoList.create({
  id: uuid('todolist'),
  name: 'Grocery List'
});
