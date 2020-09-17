import uuid from "../util/uuid";

export default class ToDoItem {
  constructor({
    id = uuid('todoitem'),
    name = '',
    labels = [],
    complete = false,
    listId
  } = {}) {
    this.id = id;
    this.name = name;
    this.labels = labels;
    this.complete = complete;
    this.listId = listId;
  }

  static create(data) {
    return Object.freeze(new ToDoItem(data));
  }
}