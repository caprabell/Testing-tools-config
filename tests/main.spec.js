/*
Escrever uma lib que receba um número e:

Se número for divisível por 3, escreva 'Fizz'
Se número for divisível por 5, escreva 'Buzz'
Se número for divisível por 3 e 5, escreva 'FizzBuzz'
Se não for multiplo de nada, retorna o número
*/

import { expect } from 'chai';
import fizzbuzz from '../src/main.js';

describe('Main', () => {

  it('Should exist a method `FizzBuzz`', () =>  {
    expect(fizzbuzz).to.exist;
    expect(fizzbuzz).to.be.a('function');
  });

  it('Should return `Fizz` when `fizzbuzz(3)`', ()=> {
    expect(fizzbuzz(3)).to.be.equal('Fizz');
  });

  it('Should return `Buzz` when `fizzbuzz(5)`', () => {
    expect(fizzbuzz(5)).to.be.equal('Buzz');
  });

  it('Should return `fizzbuzz` when `fizzbuzz(15)`', () => {
    expect(fizzbuzz(15)).to.be.equal(`Fizzbuzz`);
  });

  it('Should return `num` when `fizzbuzz(7)`', () => {
    expect(fizzbuzz(7)).to.be.equal(7);
  });
  
  it('Should return `num` when fizzbuzz(0)', () => {
    expect(fizzbuzz(0)).to.be.equal(0);
  });

});