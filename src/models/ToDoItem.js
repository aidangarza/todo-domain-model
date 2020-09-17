import Label from "./Label";

export default class ToDoItem {
  constructor({
    name = '',
    labels = [],
    complete = false
  } = {}) {
    this.name = name;
    this.labels = labels.map(Label.create);
    this.complete = complete;
  }

  static create(data) {
    return Object.freeze(new ToDoItem(data));
  }
}