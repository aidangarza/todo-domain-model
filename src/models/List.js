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
    list() {
      return {
        url: `${API_BASE_URL}/lists.json`,
        method: 'get'
      }
    },
    create({ name }) {
      return {
        url: `${API_BASE_URL}/lists.json`,
        method: 'post',
        body: JSON.stringify({ name })
      }
    },
    update({ id, name }) {
      return {
        url: `${API_BASE_URL}/lists/${id}.json`,
        method: 'put',
        body: JSON.stringify({ name })
      }
    },
    delete({ id }) {
      return {
        url: `${API_BASE_URL}/lists/${id}.json`,
        method: 'delete'
      }
    }
  }
}