function sumFor(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total = total + args[i];
  }
  return total;
}
