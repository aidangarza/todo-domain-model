import Label from "./Label";
import uuid from "../../../util/uuid";

export default class ToDoItem {
  constructor({
    id = uuid('todoitem'),
    name = '',
    labels = [],
    complete = false
  } = {}) {
    this.id = id;
    this.name = name;
    this.labels = labels.map(Label.create);
    this.complete = complete;
  }

  static create(data) {
    return Object.freeze(new ToDoItem(data));
  }
}