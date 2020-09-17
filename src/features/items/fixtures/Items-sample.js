import Item from "../../../models/Item";
import uuid from "../../../util/uuid";
import sampleList from '../../lists/fixtures/List-sample';

export default [
  {
    id: uuid('todoitem'),
    name: 'Bananas',
    labels: ['produce'],
    complete: false,
    listId: sampleList.id
  },
  {
    id: uuid('todoitem'),
    name: 'Apples',
    labels: ['produce'],
    complete: true,
    listId: sampleList.id
  },
  {
    id: uuid('todoitem'),
    name: 'Milk',
    labels: ['dairy', 'cold'],
    complete: false,
    listId: sampleList.id
  },
  {
    id: uuid('todoitem'),
    name: 'Bread',
    labels: ['bakery'],
    complete: false,
    listId: sampleList.id
  }
].map(Item.create);
