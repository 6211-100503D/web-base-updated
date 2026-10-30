export function personUpdate(person) {
  if (person.gender === 'female') {
    delete person.age;
  } else if (person.gender === 'male') {
    if (!('income' in person)) {
      person.income = 100000;
    }
  }
  return person;
}

export function objectFieldsList(obj1, obj2, obj3) {
  const fields = new Set();
  for (const key in obj1) fields.add(key);
  for (const key in obj2) fields.add(key);
  for (const key in obj3) fields.add(key);
  return Array.from(fields).sort();
}

export function objectClone(obj, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push({ ...JSON.parse(JSON.stringify(obj)), id: i });
  }
  return result;
}
