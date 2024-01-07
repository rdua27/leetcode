var firstUniqChar = function (s) {
  // iterate the string and store the count of each alphabet
  const charFrequency = new Map();
  for (const char of s) {
    if (charFrequency.get(char)) {
      charFrequency.set(char, charFrequency.get(char) + 1);
    } else {
      charFrequency.set(char, 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (charFrequency.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
