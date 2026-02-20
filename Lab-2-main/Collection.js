const phonebook = [
  { name: 'Maksim', phone: '+38099999999' },
  { name: 'Oleksandr Tuhanskykh', phone: '+38064536464' },
  { name: 'NN', phone: '+38023757254' }
];

function findPhoneByName(name) {
  for (let i = 0; i < phonebook.length; i++) {
    if (phonebook[i].name === name) {
      return phonebook[i].phone;
    }
  }
  return undefined; 
}
const phoneHash = {
  'Maksim': '+38099999999',
  'Oleksandr Tuhanskykh': '+38064536464',
  'NN': '+38093757254'
};

function findPhoneByNameHash(name) {
  return phoneHash[name];
}
