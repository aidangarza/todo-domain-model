import ToDoItem from "./ToDoItem";
import uuid from "../../../util/uuid";

export default class ToDoList {
  constructor({
    id = uuid('todolist'),
    name = '',
    items = []
  } = {}) {
    this.id = id;
    this.name = name;
    this.items = items.map(ToDoItem.create);
  }

  static create(data) {
    return Object.freeze(new ToDoList(data));
  }
}