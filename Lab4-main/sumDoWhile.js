function sumDoWhile(...args) {
  if (args.length === 0) return 0;
  let i = 0;
  let total = 0;
  do {
    total = total + args[i];
    i = i + 1;
  } while (i < args.length);
  return total;
}
