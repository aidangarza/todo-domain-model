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
}