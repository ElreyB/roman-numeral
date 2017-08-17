// var converterTable = {
//   1: "I",
//   5: "V",
//   10: "X",
//   50: "L",
//   100: "C",
//   500: "D",
//   1000: "M"
// };
//
// var remainder = 0;
// var roman = "";
// var numbers =Object.keys(converterTable);
//
// // numbers.forEach(function(number){
// //   roman = converterTable[number];
// //   console.log(roman);
// // });



$(document).ready(function(){
  $("form#number-form").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());



    if (numberInput > 10 || numberInput % 10 === 0){
      var difference = numberInput % 10;
      console.log(difference);
      var tenthPlace = numberInput % 10;
      roman = "X".repeat(tenthPlace);
      roman += "I".repeat(difference);
    } else if (numberInput === 19){
      roman = "XIX";
    } else if (numberInput > 15){
      remainder = numberInput - 15;
      roman = "XV" + "I".repeat(remainder);
    } else if (numberInput === 15){
      roman = "XV";
    } else if (numberInput === 14){
      roman = "XIV";
    } else if (numberInput > 10){
      remainder = numberInput - 10;
      roman = "X" + "I".repeat(remainder);
    } else if (numberInput % 10 === 0){
      roman = "X";
    } else if (numberInput === 9){
      roman = "IX";
    } else if (numberInput > 5){
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
