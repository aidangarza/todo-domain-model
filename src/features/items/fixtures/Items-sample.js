import Item from "../../../models/Item";
import uuid from "../../../util/uuid";
import sampleList from '../../lists/fixtures/List-sample';

export default [
  {
    id: uuid('todoitem'),
    name: 'Bananas',
    labelNames: ['produce'],
    complete: false,
    listId: sampleList.id
  },
  {
    id: uuid('todoitem'),
    name: 'Apples',
    labelNames: ['produce'],
    complete: true,
    listId: sampleList.id
  },
  {
    id: uuid('todoitem'),
    name: 'Milk',
    labelNames: ['dairy', 'cold'],
    complete: false,
    listId: sampleList.id
  },
  {
    id: uuid('todoitem'),
    name: 'Bread',
    labelNames: ['bakery'],
    complete: false,
    listId: sampleList.id
  }
].map(Item.create);
