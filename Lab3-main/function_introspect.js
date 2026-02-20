function introspect(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'function') {
      result.push([key, obj[key].length]);
    }
  }
  return result;
}

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
};

console.log(introspect(iface));
