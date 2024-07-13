var hashTable = [
  ["none"],
  ["none"],
  ["none"],
  ["none"],
  ["none"],
  ["none"],
  ["none"],
  ["none"],
  ["none"],
  ["none"],
];

function add(name, hashTable) {
  index = getHashValue(name);
  if (hashTable[index][0] == "none") {
    hashTable[index][0] = 1;
  } else {
    hashTable[index][0] += 1;
  }
  hashTable[index].push(name);
}

function check(name, hashTable) {
  index = getHashValue(name);
  if (hashTable[index][0] == "none") {
    return false;
  }
  for (let i = 1; i < hashTable[index].length; i++) {
    if (name == hashTable[index][i]) {
      return name == hashTable[index][i];
    }
  }
  return false;
}

function getHashValue(name) {
  let value = 0;
  for (let i = 0; i < name.length; i++) {
    value += name.charCodeAt(i);
  }
  return value % 10;
}

add("Faisal", hashTable);
add("Afsheen", hashTable);
add("Shafia", hashTable);
add("Subha", hashTable);
add("Mehreen", hashTable);
add("Alorika", hashTable);
add("Avradeep", hashTable);
add("Ehan", hashTable);
add("Prachi", hashTable);
add("Meena", hashTable);

console.log(hashTable);

console.log(check("Subha", hashTable));
console.log(check("Afsheen", hashTable));
console.log(check("Shohag", hashTable));
console.log(check("Mehreen", hashTable));
