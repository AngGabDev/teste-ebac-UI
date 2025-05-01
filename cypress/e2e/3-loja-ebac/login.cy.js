///<reference types="cypress"/>

describe('funcionalidade: login', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

afterEach(() => {
    cy.screenshot()
});

it('Deve fazer login com sucesso', () => {


cy.get('#username').type('angelo.teste@teste.com')
cy.get('#password').type('@teste123')
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, angelo.teste (não é angelo.teste? Sair)')

})

it('Deve apresentar uma mensagem de erro ai inserir usuário inválido', () => {
    
    
    cy.get('#username').type('ang.teste@teste.com')
    cy.get('#password').type('@teste123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')

});

it('Deve apresentar uma mensagem de erro ai inserir senha inválida', () => {
    
    cy.get('#username').type('angelo.teste@teste.com')
    cy.get('#password').type('@teste12')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('exist')

});

})