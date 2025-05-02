///<reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {

            cy.login(login.email, login.senha)

        })
        
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        
        cy.detalhesConta('Angelo', 'Gabriel', 'Ang.Dev')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

});