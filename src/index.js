module.exports = function check(str, bracketsConfig) {
  const array = [];
  const brackets = Object.fromEntries(bracketsConfig);

  for (const elements of str.split``) {
    if (array[0] === elements) {
        array.shift();
      } else if (brackets[elements]) {
        array.unshift(brackets[elements]);
      } else {
          return false;
      }
    }

  return array.length === 0;

}
