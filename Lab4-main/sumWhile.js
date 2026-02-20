function sumWhile(...args) {
  let i = 0;
  let total = 0;
  while (i < args.length) {
    total = total + args[i];
    i = i + 1;
  }
  return total;
}
