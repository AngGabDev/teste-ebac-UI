///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
      
        cy.get('.product-block')
        //.first() ou .last()
        //.contains()
        .eq(1)
        .click()

        cy.get('#tab-title-description > a').should('exist')

    });
});