import {API_BASE_URL} from "../constants/api";

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
        url: `${API_BASE_URL}/labels.json`,
        method: 'get'
      }
    }
  }
}