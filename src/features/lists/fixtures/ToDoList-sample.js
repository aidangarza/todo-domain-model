import ToDoList from "../models/ToDoList";

export default ToDoList.create({
  name: 'Grocery List',
  items: [
    {
      name: 'Bananas',
      labels: [
        {
          name: 'fruit',
          color: 'red'
        }
      ],
      complete: true
    },
    {
      name: 'Apples',
      labels: [
        {
          name: 'fruit',
          color: 'red'
        }
      ],
      complete: false
    },
    {
      name: 'Milk',
      labels: [
        {
          name: 'dairy',
          color: 'purple'
        },
        {
          name: 'cold',
          color: 'blue'
        }
      ],
      complete: false
    },
    {
      name: 'Bread',
      labels: [
        {
          name: 'bakery',
          color: 'green'
        }
      ],
      complete: false
    }
  ]
});
