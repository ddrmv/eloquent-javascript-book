const countChar = (string, char) => {
  counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counter++;
    }
  }
  return counter;
};

const countBs = (string) => {
  return countChar(string, "B");
};

// console.log(countBs("BBC"));
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
