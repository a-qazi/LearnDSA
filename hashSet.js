var hashSet = [
  new Set(),
  new Set(),
  new Set(),
  new Set(),
  new Set(),
  new Set(),
  new Set(),
  new Set(),
  new Set(),
  new Set(),
];

console.log(hashSet);

function add(name, hashSet) {
  index = getHashValue(name);
  hashSet[index].add(name);
}

function check(name, hashSet) {
  index = getHashValue(name);
  return hashSet[index].has(name);
}

function getHashValue(name) {
  let value = 0;
  for (let i = 0; i < name.length; i++) {
    value += name.charCodeAt(i);
  }
  return value % 10;
}

add("Faisal", hashSet);
add("Afsheen", hashSet);
add("Shafia", hashSet);
add("Subha", hashSet);
add("Mehreen", hashSet);
add("Alorika", hashSet);
add("Avradeep", hashSet);
add("Ehan", hashSet);
add("Prachi", hashSet);
add("Meena", hashSet);

console.log(hashSet);

console.log(check("Subha", hashSet));
console.log(check("Afsheen", hashSet));
console.log(check("Shohag", hashSet));
console.log(check("Mehreen", hashSet));
