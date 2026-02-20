"use strict";

function seq(fn) {
  const fns = [fn];
  function chain(next) {
    if (typeof next === 'function') {
      fns.push(next);
      return chain; 
    } else {
      return fns.reduce((acc, f) => f(acc), next);
    }
  }

  return chain;
}

console.log(seq(x => x + 7)(x => x * 2)(5));
