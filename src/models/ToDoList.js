import ToDoItem from "./ToDoItem";
import uuid from "../util/uuid";

export default class ToDoList {
  constructor({
    id = uuid('todolist'),
    name = ''
  } = {}) {
    this.id = id;
    this.name = name;
  }

  static create(data) {
    return Object.freeze(new ToDoList(data));
  }
}