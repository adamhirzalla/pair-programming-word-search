const wordSearch = (letters, word) => {
  let isFound = false;
  // checking horizontals
  letters.map(el => el.join('')).forEach(line => {
    if (line.includes(word)) isFound = true;
  });
  // transposing
  const transposedArray = [];
  for (let row = 0; row < letters[0].length; row++) {
    transposedArray.push([]);
    for (let col = 0; col < letters.length; col++) {
      transposedArray[row].push(letters[col][row]);
    }
  }
  // checking verticals
  transposedArray.map(el => el.join('')).forEach(line => {
    if (line.includes(word)) isFound = true;
  });
  return isFound;
};

module.exports = wordSearch;