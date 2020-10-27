export default function assignKeyAs(obj, model, property = 'id') {
  const update = { ...obj };

  for (const key in update) {
    update[key] = model.create({
      ...update[key],
      [property]: key
    })
  }

  return update;
}