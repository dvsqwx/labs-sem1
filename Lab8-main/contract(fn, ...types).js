"use strict";

function contract(fn, ...types) {
  return function(...args) {
    const argTypes = types.slice(0, -1);
    const resultType = types[types.length - 1];
    for (let i = 0; i < argTypes.length; i++) {
      if (typeof args[i] !== typeof new argTypes[i]()) {
        throw new TypeError('Unreadable arg!');
      }
    }
    const result = fn(...args);
    if (typeof result !== typeof new resultType()) {
      throw new TypeError('Unreadable trash!');
    }

    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

const concat = (a, b) => a + b;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Oleksandr', 'Tuhanskykh'));
