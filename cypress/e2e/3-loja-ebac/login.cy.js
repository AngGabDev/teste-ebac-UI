///<reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: login', () => {

beforeEach(() => {
    cy.visit('minha-conta')
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

it('Deve fazer login com sucesso - Massa de dados', () => {
    
    cy.get('#username').type(perfil.email)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, angelo.teste (não é angelo.teste? Sair)')

});

it('Deve fazer login com sucesso - Fixture', () => {
    
    cy.fixture('perfil').then( dados => {

        cy.get('#username').type(dados.email , {log: false})
        cy.get('#password').type(dados.senha , {log: false})
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, angelo.teste (não é angelo.teste? Sair)')

    })



});

it.only('Deve fazer login com sucesso - Comando Custumizado', () => {
        
cy.login(perfil.email, perfil.senha)
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

});

})