var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', () => {

  // smoke tests
  describe('Smoke Test', function() {

    it('Should exist the calc lib', function() {
      expect(calc).to.exist;
    });

    it('Should exist the method `sum`', function() {
       expect(calc.sum).to.exist;
       expect(calc.sum).to.be.a('function');  
    });
  
    it('Should exist the method `sub`', function() {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');  
    });

    it('Should exist the method `mult`', function() {
    expect(calc.mult).to.exist;
    expect(calc.mult).to.be.a('function');  
     });

    it('Should exist the method `div`', function() {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');  
    });

  });

  describe('Sum', function() {
    it('Should return 6 when `sum(3,3)`', function() {
      expect(calc.sum(3, 3)).to.be.equal(6); 
    });
  });

  describe('Sub', function() {
    it('Should return 3 when `sub(6,3)`', function() {
      expect(calc.sub(6, 3)).to.be.equal(3);
    });
    it('Should return -4 when `sub(6,10)`', function() {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    })
  });

  describe('Mult', function() {
    it('Should return 9 when `mult(3,3)`', function() {
      expect(calc.mult(3, 3)).to.be.equal(9); 
    });
  });

  describe('Div', function() {
    it('Should return 2 when `div(6,3)`', function() {
      expect(calc.div(6, 3)).to.be.equal(2);
    });
    it('Should return `Não é possível divisão por Zero`', function() {
      expect(calc.div(6, 0)).to.be.equal(`Não é possível divisão por Zero!`);
    });
  });


});
