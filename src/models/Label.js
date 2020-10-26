import {API_BASE_URL, WEBFLOW_API_TOKEN} from "../constants/api";

const LABEL_COLLECTION_ID = '5f9629f3632fcab615aa84ab';

export default class Label {
  constructor({
    name = '',
    color = 'gray'
  }) {
    this.name = name;
    this.color = color;
  }

  static create(data) {
    return Object.freeze(new Label(data));
  }

  static api = {
    get() {
      return {
        url: `${API_BASE_URL}/collections/${LABEL_COLLECTION_ID}/items`,
        method: 'get',
        headers: new Headers({
          'Authorization': `Bearer ${WEBFLOW_API_TOKEN}`,
          'accept-version': '1.0.0'
        })
      }
    }
  }
}