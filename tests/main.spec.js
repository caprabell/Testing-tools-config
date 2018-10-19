describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it.skip('should happen ...', () => {
        // skip para pular o bloco
        // espera que aconteça
        // entra dados / metodo sum(2,2)
        // espera retornar (4) => true | (3) => false => broken test
      });
    });
    context('Case 2', () => {
      // only para rodar só um bloco
      it('should happen ...', () => {

      });
    });
  });
  describe('Method b', () => {

  });
});
