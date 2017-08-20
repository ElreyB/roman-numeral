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


// function to to converter arabic numbers to roman numberals
function romanNumberalsConverter(arabicNumber){
  // empty string to hold the roman numberal that will be built base off the user input
  var result = "";
  // For each roman numberal in the roman numberals array
  romanNumberals.forEach(function(romanNumberal){

    // while arabic number is greater than the value at the key in the hash
    // Ex. (arabicNumber === 349)  >= (romanNumberalTable[romanNumberal] === 1000, 900, 500, 400, 100, etc.)
    while(arabicNumber >= romanNumberalsTable[romanNumberal]){
      // add that key to the string result
      result += romanNumberal;
      // inputted arabic number is substracted by the value of that key
      arabicNumber -= romanNumberalsTable[romanNumberal];
    }
  });
  return result;
}

$(document).ready(function(){
  $("span.roman").hide();
  $("form#number-form").submit(function(event){
    event.preventDefault();

    var numberInput = parseInt($("input#number").val());

    $("span.roman").text(romanNumberalsConverter(numberInput)).show();
    $("input#number").val("");
  });

  $("#clear").click(function(event){
    event.preventDefault();
    $("span.roman").text("").hide();
  })
});
