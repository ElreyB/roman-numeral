// var Converter = require('./../js/roman-numeral.js').converterModule;
import { Converter } from './../js/roman-numeral.js';

describe('Converter', function(){
  var converter;

  beforeEach(function() {
    converter = new Converter()
  });

  it('should return the roman number of an arabic number', function(){
    expect(converter.romanNumeralsConverter(20)).toEqual("XX")
  });

  it('should return the roman number of an arabic number', function(){
    expect(converter.romanNumeralsConverter(10)).toEqual("X")
  });
});
