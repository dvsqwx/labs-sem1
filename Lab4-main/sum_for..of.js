function sumForOf(...args) {
  let total = 0;
  for (let num of args) {
    total = total + num;
  }
  return total;
}
