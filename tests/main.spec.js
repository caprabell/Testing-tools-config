describe('Main', function() {
    describe('Method A', function() {
        context('Case 1', function() {
            it.skip('should happen ...', function() {
                // skip para pular o bloco
                // espera que aconteça
                // entra dados / metodo sum(2,2)
                // espera retornar (4) => true | (3) => false => broken test
            });
        });
        context('Case 2', function() {
            // only para rodar só um bloco
            it('should happen ...', function() {

            });
        });
    });
    describe('Method b', function() {

    });
});