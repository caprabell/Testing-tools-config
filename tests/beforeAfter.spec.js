describe('Before and After', function(){
    var arr;

    // roda uma vez, antes do bloco
    before(function() {
        // iniciar uma conexão bd
        // criar conjunto de dados no banco
    });

    // roda uma vez, depois do bloco
    after(function() {
        // fecha conexão
        // apagar conjunto de dados no banco
    });

    // roda toda vez, antes de cada bloco
    beforeEach(function() {
       arr = [1, 2, 3];
    });

    // roda toda vez, depois de cada bloco
    afterEach(function() {
        
    });

    it('should have a size of 4 when push another value', function() {
        arr.push(4);
        console.log(arr.length); // 4
    });

    it('should have a size of 2 when pop a value', function() {
        arr.pop();
        console.log(arr.length); // 2
    });

    it('should remove 3 when use pop', function() {
        console.log(arr.pop() === 3); // true
    });
});
