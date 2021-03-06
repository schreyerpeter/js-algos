// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((word) => {
//       const [first, ...rest] = word;
//       return `${first.toUpperCase()}${rest.join("")}`;
//     })
//     .join(" ");
// }

function capitalize(str) {
  let capitalized = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      capitalized += str[i].toUpperCase();
    } else capitalized += str[i];
  }

  return capitalized;
}

module.exports = capitalize;
