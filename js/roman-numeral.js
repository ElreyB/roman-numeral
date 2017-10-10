// hash to hold all the possible characters for roman numberals(keys) and arabic numbers(values)
var romanNumeralsTable = {
   M: 1000,
  CM: 900,
   D: 500,
  CD: 400,
   C: 100,
  XC: 90,
   L: 50,
  XL: 40,
   X: 10,
  IX: 9,
   V: 5,
  IV: 4,
   I: 1
};

// an array to hold the keys(roman numberals) of roman numberal table
var romanNumerals = Object.keys(romanNumeralsTable);
var sortedRomanNumerals = romanNumerals.slice().sort(function(a,b){
  return b.length - a.length;
});


export class Converter {
  constructor(){
  }

  romanNumeralsConverter(arabicNumber){
    var result = "";
    romanNumerals.forEach(function(romanNumeral){
      while(arabicNumber >= romanNumeralsTable[romanNumeral]){
        result += romanNumeral;
        arabicNumber -= romanNumeralsTable[romanNumeral];
      }
    });
    return result;
  };

  arabicNumberConverter(romanNumeral){
    var result = 0;
    return sortedRomanNumerals.reduce(function(arabicNumber, romanCharacter){
      while(romanNumeral.includes(romanCharacter)){
        result += romanNumeralsTable[romanCharacter];
        romanNumeral = romanNumeral.replace(romanCharacter, "");
      }
      return result;
    },0);
  };
};
// function Converter(){
//
// }
// function to to converter arabic numbers to roman numberals
// Converter.prototype.romanNumeralsConverter = function(arabicNumber){
  // empty string to hold the roman numberal that will be built base off the user input
//   var result = "";
//   // For each roman numberal in the roman numberals array
//   romanNumerals.forEach(function(romanNumeral){
//
//     // while arabic number is greater than the value at the key in the hash
//     // Ex. (arabicNumber === 349)  >= (romanNumeralTable[romanNumeral] === 1000, 900, 500, 400, 100, etc.)
//     while(arabicNumber >= romanNumeralsTable[romanNumeral]){
//       // add that key to the string result
//       result += romanNumeral;
//       // inputted arabic number is substracted by the value of that key
//       arabicNumber -= romanNumeralsTable[romanNumeral];
//     }
//   });
//   return result;
// };

// Convert romam numberal to arabic number
// Converter.prototype.arabicNumberConverter = function (romanNumeral){
//   var result = 0;
//   return sortedRomanNumerals.reduce(function(arabicNumber, romanCharacter){
//     while(romanNumeral.includes(romanCharacter)){
//       result += romanNumeralsTable[romanCharacter];
//       romanNumeral = romanNumeral.replace(romanCharacter, "");
//     }
//     return result;
//   },0);
// };


// exports.converterModule = Converter;
