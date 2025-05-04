///<reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
      
       produtosPage.buscarProdutoLista('Abominable Hoodie')

        cy.get('#tab-title-description > a').should('exist')

    });

    it('Deve buscar um produto com sucesso', () => {
        
        let produto = 'Apollo Running Short'

        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)

    });

    it('Deve visitar a página de um produto', () => {
        
        produtosPage.visitarProduto('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short')

    });

    it('Deve adicionar um produto ao carrinho', () => {
        
        let qtd = 9

        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addCarrinho('M', 'Yellow', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
        
        cy.fixture('produtos').then(dados => {

    
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
            
        })

        
    });
});