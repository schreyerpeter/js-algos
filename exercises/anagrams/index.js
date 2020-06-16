// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   function buildCharacterMap(string) {
//     const map = {};

//     for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
//       map[char] = map[char] + 1 || 1;
//     }
//     return map;
//   }

//   const aMap = buildCharacterMap(stringA);
//   const bMap = buildCharacterMap(stringB);

//   if (Object.keys(aMap).length !== Object.keys(bMap).length) return false;

//   for (let char in aMap) {
//     if (aMap[char] !== bMap[char]) return false;
//   }

//   return true;
// }

function anagrams(stringA, stringB) {
  function cleanString(string) {
    return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  }

  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
