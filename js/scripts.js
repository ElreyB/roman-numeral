// hash to hold all the possible characters for roman numberals(keys) and arabic numbers(values)
var romanNumberalsTable = {
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
var romanNumberals = Object.keys(romanNumberalsTable);

// empty string to hold the roman numberal that will be built base off the user input
var result = "";

// function to to converter arabic numbers to roman numberals
function romanNumberalsConverter(arabicNumber){
  // For each roman numberal in the roman numberals array
  romanNumberals.forEach(function(romanNumberal){

    // while arabic number is greater than the value at the key in the hash
    // Ex. arabicNumber = 349  >= romanNumberal
    while(arabicNumber >= romanNumberalsTable[romanNumberal]){
      result += romanNumberal;
      arabicNumber -= romanNumberalsTable[romanNumberal];
    }
  });
  return result;
}

$(document).ready(function(){
  $("span").hide();
  $("form#number-form").submit(function(event){
    event.preventDefault();

    var numberInput = parseInt($("input#number").val());

    $("span.roman").text(romanNumberalsConverter(numberInput));
    $("span").show();
    $("input#number").val("");
  });

  $("#clear").click(function(event){
    event.preventDefault();
    $("span").hide().empty;
  })
});
