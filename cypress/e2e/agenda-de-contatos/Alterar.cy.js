/// <reference types="cypress" />

describe('Editing Tests', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.wait(2000)
    })

    it('Should edit the contact correctly', () => {
        cy.get('.edit').first().click()
        cy.wait(1500)
        cy.get('input[type="text"]').type(' da Silva')
        cy.get('.alterar').click()
        cy.screenshot()
    })
})