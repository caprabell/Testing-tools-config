import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('Smoke Test',() => {

    it('Should exist the method `sum`',() => {
       expect(sum).to.exist;
       expect(sum).to.be.a('function');  
    });
  
    it('Should exist the method `sub`',() => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');  
    });

    it('Should exist the method `mult`',() => {
    expect(mult).to.exist;
    expect(mult).to.be.a('function');  
     });

    it('Should exist the method `div`',() => {
      expect(div).to.exist;
      expect(div).to.be.a('function');  
    });
  });

  describe('Sum',() => {
    it('Should return 6 when `sum(3,3)`',() => {
      expect(sum(3, 3)).to.be.equal(6); 
    });
  });

  describe('Sub',() => {
    it('Should return 3 when `sub(6,3)`',() => {
      expect(sub(6, 3)).to.be.equal(3);
    });
    it('Should return -4 when `sub(6,10)`',() => {
      expect(sub(6, 10)).to.be.equal(-4);
    })
  });

  describe('Mult',() => {
    it('Should return 9 when `mult(3,3)`',() => {
      expect(mult(3, 3)).to.be.equal(9); 
    });
  });

  describe('Div',() => {
    it('Should return 2 when `div(6,3)`',() => {
      expect(div(6, 3)).to.be.equal(2);
    });
    it('Should return `Não é possível divisão por Zero`',() => {
      expect(div(6, 0)).to.be.equal(`Não é possível divisão por Zero!`);
    });
  });


});
