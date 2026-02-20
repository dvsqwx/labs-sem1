const typesCount = { number: 0, string: 0, boolean: 0 };

for (const el of arr) {
  const type = typeof el;
  if (typesCount.hasOwnProperty(type)) {
    typesCount[type] += 1;
  }
}

console.dir(typesCount);
