import uuid from "../util/uuid";

export default class Item {
  constructor({
    id = uuid('item'),
    name = '',
    labelNames = [],
    complete = false,
    listId
  } = {}) {
    this.id = id;
    this.name = name;
    this.labelNames = labelNames;
    this.complete = complete;
    this.listId = listId;
  }

  static create(data) {
    return Object.freeze(new Item(data));
  }
}