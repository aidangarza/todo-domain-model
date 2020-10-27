import uuid from "../util/uuid";
import {API_BASE_URL} from "../constants/api";

export default class List {
  constructor({
    id = uuid('list'),
    name = ''
  } = {}) {
    this.id = id;
    this.name = name;
  }

  static create(data) {
    return Object.freeze(new List(data));
  }

  static api = {
    get() {
      return {
        url: `${API_BASE_URL}/lists.json`,
        method: 'get'
      }
    }
  }
}