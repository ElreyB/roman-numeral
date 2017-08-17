var converterTable = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M"
};

var remainder = 0;
var roman = "";
var numbers =Object.keys(converterTable);

// numbers.forEach(function(number){
//   roman = converterTable[number];
//   console.log(roman);
// });



$(document).ready(function(){
  $("form#number-form").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());

    if (numberInput > 5){
      remainder = numberInput - 5;
      roman = "V" + "I".repeat(remainder);
    } else if (numberInput === 5) {
      roman = "V";
    } else if (numberInput === 4){
      roman = "IV";
    } else if (numberInput % 1 === 0){
      roman = "I".repeat(numberInput);
    }

    $(".roman").text(roman);
  });
});
