function calculate() {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = average(sq, cb);
    result.push(avg);
  }
  return result;
}
