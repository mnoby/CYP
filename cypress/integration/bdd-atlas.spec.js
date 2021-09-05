describe('BDD Atlas', () => {
    it ('Visit BDD Atlas Web', ()=> {
        cy.visit('http://bdd.atlasid.tech/');
        cy.url().should('eq', 'http://bdd.atlasid.tech/');
        
    })

    it('type a Quote', () => {
        cy.get('#inputQuote').type('Bukan Kaleng Kaleng');
    })

    it('Select Colour', () => {
        cy.get('#colorSelect').select('Magenta');
    })

    it ('Submit Quote', () => {
        cy.get('#buttonAddQuote').click();
        cy.contains('Kaleng').should('exist');
    })

    it ('Clear Quote', () => {
        cy.contains('Kaleng').click().should('not.exist');

    })

})