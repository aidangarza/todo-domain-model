import Label from "../../../models/Label";

export default [
  {
    name: 'produce',
    color: 'red'
  },
  {
    name: 'dairy',
    color: 'green'
  },
  {
    name: 'cold',
    color: 'blue'
  },
  {
    name: 'bakery',
    color: 'purple'
  },
  {
    name: 'clothing',
    color: 'pink'
  },
  {
    name: 'toiletries',
    color: 'turquoise'
  }
].map(Label.create);
