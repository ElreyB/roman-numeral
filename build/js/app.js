(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var sortedRomanNumerals = romanNumerals.slice().sort(function (a, b) {
  return b.length - a.length;
});

var Converter = exports.Converter = function () {
  function Converter() {
    _classCallCheck(this, Converter);
  }

  _createClass(Converter, [{
    key: "romanNumeralsConverter",
    value: function romanNumeralsConverter(arabicNumber) {
      var result = "";
      romanNumerals.forEach(function (romanNumeral) {
        while (arabicNumber >= romanNumeralsTable[romanNumeral]) {
          result += romanNumeral;
          arabicNumber -= romanNumeralsTable[romanNumeral];
        }
      });
      return result;
    }
  }, {
    key: "arabicNumberConverter",
    value: function arabicNumberConverter(romanNumeral) {
      var result = 0;
      return sortedRomanNumerals.reduce(function (arabicNumber, romanCharacter) {
        while (romanNumeral.includes(romanCharacter)) {
          result += romanNumeralsTable[romanCharacter];
          romanNumeral = romanNumeral.replace(romanCharacter, "");
        }
        return result;
      }, 0);
    }
  }]);

  return Converter;
}();

;
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

},{}],2:[function(require,module,exports){
"use strict";

var _romanNumeral = require("./../js/roman-numeral.js");

$(document).ready(function () {
  $("span.roman, span.arabic").hide();

  var converter = new _romanNumeral.Converter();

  $("form#number-form").submit(function (event) {
    event.preventDefault();
    $(this).find(".form-group").removeClass("has-error");
    $("p.number-error").hide();

    var numberInput = parseInt($("input#number").val());

    if (isNaN(numberInput)) {
      $(this).find(".form-group").addClass("has-error");
      $("p.number-error").show();
      return;
    }

    $("span.roman").text(converter.romanNumeralsConverter(numberInput)).show();
    $("input#number").val("");
  });

  $("#clear-a").click(function (event) {
    event.preventDefault();
    $("span.roman").text("").hide();
  });

  $("form#arabic-form").submit(function (event) {
    event.preventDefault();
    $(this).find(".form-group").removeClass("has-error");
    $("p.roman-error").hide();
    var romanInput = $("input#roman").val().toUpperCase();

    if (romanInput.match(/[^MDCLXVI]/)) {
      $(this).find(".form-group").addClass("has-error");
      $("p.roman-error").show();
      return;
    }
    $("span.arabic").text(converter.arabicNumberConverter(romanInput)).show();
    $("input#roman").val("");
  });

  $("#clear-r").click(function (event) {
    event.preventDefault();
    $("span.arabic").text("").hide();
  });
}); // var Converter = require('./../js/roman-numeral.js').converterModule;

},{"./../js/roman-numeral.js":1}]},{},[2]);
