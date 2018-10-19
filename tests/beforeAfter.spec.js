const expect = require('chai').expect;

describe('Before and After', () => {
  let arr;

  // roda uma vez, antes do bloco
  before(() => {
    // iniciar uma conexão bd
    // criar conjunto de dados no banco
  });

  // roda uma vez, depois do bloco
  after(() => {
    // fecha conexão
    // apagar conjunto de dados no banco
  });

  // roda toda vez, antes de cada bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // roda toda vez, depois de cada bloco
  afterEach(() => {

  });

  // testar tipos ou se existe
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove 3 when use pop', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });
});
