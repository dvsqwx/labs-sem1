function ages(persons) {
  let result = {};
  for (let key in persons) {
    let born = persons[key].born;
    let died = persons[key].died;
    result[key] = died - born;
  }
  return result;
}

const persons = {
  Washington: { born: 1732, died: 1799 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  Sassaman: { born: 1980, died: 2011 },
};

console.log(ages(persons));
