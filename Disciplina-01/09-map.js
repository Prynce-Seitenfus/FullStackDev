const constacts = new Map();
constacts.set('John', {phone: '123-4567', address: '123 N 1st Ave'});
constacts.has('John'); // true
constacts.get('Jane'); // undefined
constacts.set('Jane', {phone: '234-5678', address: '234 N 2nd Ave'});
constacts.get('Jane'); // {phone: '234-5678', address: '234 N 2nd Ave'}
constacts.delete('Mary'); // false
constacts.delete('John'); // true
constacts.has('John'); // false
