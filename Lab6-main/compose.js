"use strict";

function compose(...fns) {
  if (fns.some(fn => typeof fn !== 'function'))
    throw new Error('All args must be functions, my friend!');
  let onError = null;
  const f = x => {
    try {
      return fns.reduceRight((v, fn) => fn(v), x);
    } catch (e) {
      onError?.(e);
      return undefined;
    }
  };
  f.on = (event, h) => event === 'error' && (onError = h);
  return f;
}

const g = compose(cube, twice, inc);
console.log(g(2));
