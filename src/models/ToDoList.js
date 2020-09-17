import ToDoItem from "./ToDoItem";

export default class ToDoList {
  constructor({
    name = '',
    items = []
  } = {}) {
    this.name = name;
    this.items = items.map(ToDoItem.create);
  }

  static create(data) {
    return Object.freeze(new ToDoList(data));
  }
}