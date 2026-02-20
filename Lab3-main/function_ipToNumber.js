function ipToNumber(ip = '127.0.0.1') {
  let parts = ip.split('.').map(x => Number(x));
  return parts.reduce((acc, num, i) => {
    return acc + (num << (8 * (3 - i)));
  }, 0);
}

console.log(ipToNumber('77.47.133.102'));
