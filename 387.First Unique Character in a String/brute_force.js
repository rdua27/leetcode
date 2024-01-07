var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let isUnique = true;
    for (let j = 0; j < s.length; j++) {
      if (i != j && s[i] === s[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) return i;
  }

  return -1;
};
