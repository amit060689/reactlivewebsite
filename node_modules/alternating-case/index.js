module.exports = function (string) {
  let characters = string.toLowerCase().split("");
  let length = characters.length;
  
  for (let item = 0; item < length; item += 2) {
    characters[item] = characters[item].toUpperCase();
  }
  return characters.join("");
};
