import uuid from "../util/uuid";
import {API_BASE_URL, WEBFLOW_API_TOKEN} from "../constants/api";

const ITEM_COLLECTION_ID = '5f96392aefe78d096158c3b0';

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

  static api = {
    get() {
      return {
        url: `${API_BASE_URL}/collections/${ITEM_COLLECTION_ID}/items`,
        method: 'get',
        headers: new Headers({
          'Authorization': `Bearer ${WEBFLOW_API_TOKEN}`,
          'accept-version': '1.0.0'
        })
      };
    }
  }
}