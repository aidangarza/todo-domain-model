import uuid from "../util/uuid";
import { WEBFLOW_API_TOKEN } from "../constants/api";

const LIST_COLLECTION_ID = '5f96295862f66d0284257332';

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

  static api = {
    get() {
      return {
        url: `${API_BASE_URL}/collections/${LIST_COLLECTION_ID}/items`,
        method: 'get',
        headers: new Headers({
          'Authorization': `Bearer ${WEBFLOW_API_TOKEN}`,
          'accept-version': '1.0.0'
        })
      }
    }
  }
}