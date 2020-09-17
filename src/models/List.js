import uuid from "../util/uuid";

export default class List {
  constructor({
    id = uuid('todolist'),
    name = ''
  } = {}) {
    this.id = id;
    this.name = name;
  }

  static create(data) {
    return Object.freeze(new List(data));
  }
}