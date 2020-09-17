import List from "../../../models/List";
import uuid from "../../../util/uuid";

export default List.create({
  id: uuid('todolist'),
  name: 'Grocery List'
});
