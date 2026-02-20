function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    let index = random(0, characters.length - 1);
    key = key + characters[index];
  }
  return key;
}

const chars = '1234dfsgdg324sdf435234fds';
console.log(generateKey(16, chars));
