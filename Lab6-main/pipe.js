"use strict";

const pipe = (...fns) => {
  if (fns.some(fn => typeof fn !== 'function'))
    throw new Error('All args must be functions, my friend');
  return x => fns.reduce((v, fn) => fn(v), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));
