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

var romanNumerals = Object.keys(romanNumeralsTable);
var sortedRomanNumerals = romanNumerals.slice().sort(function(a, b) {
  return b.length - a.length;
});
function romanNumeralsConverter(arabicNumber) {
  var result = "";
  romanNumerals.forEach(function(romanNumeral) {
    while (arabicNumber >= romanNumeralsTable[romanNumeral]) {
      result += romanNumeral;
      arabicNumber -= romanNumeralsTable[romanNumeral];
    }
  });
  return result;
}

function arabicNumberConverter(romanNumeral = "") {
  var result = 0;
  return sortedRomanNumerals.reduce(function(arabicNumber, romanCharacter) {
    while (romanNumeral.includes(romanCharacter)) {
      result += romanNumeralsTable[romanCharacter];
      romanNumeral = romanNumeral.replace(romanCharacter, "");
    }
    return result;
  }, 0);
}

$(document).ready(function() {
  $("span.roman, span.arabic").hide();

  $("form#number-form").submit(function(event) {
    event.preventDefault();
    $(this)
      .find(".form-group")
      .removeClass("has-error");
    $("p.number-error").hide();
    var numberInput = parseInt($("input#number").val());

    if (isNaN(numberInput)) {
      $(this)
        .find(".form-group")
        .addClass("has-error");
      $("p.number-error").show();
      return;
    }

    $("span.roman")
      .text(romanNumeralsConverter(numberInput))
      .show();
    $("input#number").val("");
  });

  $("#clear-a").click(function(event) {
    event.preventDefault();
    $("span.roman")
      .text("")
      .hide();
  });

  $("form#arabic-form").submit(function(event) {
    event.preventDefault();
    $(this)
      .find(".form-group")
      .removeClass("has-error");
    $("p.roman-error").hide();
    var romanInput = $("input#roman")
      .val()
      .toUpperCase();

    if (romanInput.match(/[^MDCLXVI]/)) {
      $(this)
        .find(".form-group")
        .addClass("has-error");
      $("p.roman-error").show();
      return;
    }
    $("span.arabic")
      .text(arabicNumberConverter(romanInput))
      .show();
    $("input#roman").val("");
  });

  $("#clear-r").click(function(event) {
    event.preventDefault();
    $("span.arabic")
      .text("")
      .hide();
  });
});
