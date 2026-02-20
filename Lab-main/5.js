const typesCountDynamic = {};

for (const el of arr) {
  const type = typeof el;
  if (!typesCountDynamic[type]) {
    typesCountDynamic[type] = 0;
  }
  typesCountDynamic[type] += 1;
}

console.dir(typesCountDynamic);
