const romanNumeralsTable = {
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

const romanNumerals = Object.keys(romanNumeralsTable);
const sortedRomanNumerals = [...romanNumerals].sort(
  (a, b) => b.length - a.length
);

function romanNumeralsConverter(arabicNumber) {
  return romanNumerals.reduce((result, romanNumeral) => {
    while (arabicNumber >= romanNumeralsTable[romanNumeral]) {
      result += romanNumeral;
      arabicNumber -= romanNumeralsTable[romanNumeral];
    }
    return result;
  }, "");
}

function arabicNumberConverter(romanNumeral) {
  return sortedRomanNumerals.reduce((arabicNumber, romanCharacter) => {
    while (romanNumeral.includes(romanCharacter)) {
      arabicNumber += romanNumeralsTable[romanCharacter];
      romanNumeral = romanNumeral.replace(romanCharacter, "");
    }
    return arabicNumber;
  }, 0);
}

$(document).ready(() => {
  $("span.roman, span.arabic").hide();

  $("form#number-form").submit(event => {
    event.preventDefault();
    $(this)
      .find(".form-group")
      .removeClass("has-error");
    $("p.number-error").hide();
    const numberInput = parseInt($("input#number").val());

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

  $("#clear-a").click(event => {
    event.preventDefault();
    $("span.roman")
      .text("")
      .hide();
  });

  $("form#arabic-form").submit(event => {
    event.preventDefault();
    $(this)
      .find(".form-group")
      .removeClass("has-error");
    $("p.roman-error").hide();
    const romanInput = $("input#roman")
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

  $("#clear-r").click(event => {
    event.preventDefault();
    $("span.arabic")
      .text("")
      .hide();
  });
});
