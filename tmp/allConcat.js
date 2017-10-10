var Converter = require('./../js/roman-numeral.js').converterModule;

$(document).ready(function(){
  $("span.roman, span.arabic").hide();

  var converter = new Converter();

  $("form#number-form").submit(function(event){
    event.preventDefault();
    $(this).find(".form-group").removeClass("has-error");
    $("p.number-error").hide();

    var numberInput = parseInt($("input#number").val());

    if (isNaN(numberInput)){
      $(this).find(".form-group").addClass("has-error");
      $("p.number-error").show();
      return;
    }

    $("span.roman").text(converter.romanNumeralsConverter(numberInput)).show();
    $("input#number").val("");
  });

  $("#clear-a").click(function(event){
    event.preventDefault();
    $("span.roman").text("").hide();
  });

  $("form#arabic-form").submit(function(event){
    event.preventDefault();
    $(this).find(".form-group").removeClass("has-error");
    $("p.roman-error").hide();
    var romanInput = $("input#roman").val().toUpperCase();

    if (romanInput.match(/[^MDCLXVI]/)){
      $(this).find(".form-group").addClass("has-error");
      $("p.roman-error").show();
      return;
    }
    $("span.arabic").text(converter.arabicNumberConverter(romanInput)).show();
    $("input#roman").val("");
  });

  $("#clear-r").click(function(event){
    event.preventDefault();
    $("span.arabic").text("").hide();
  });
});
