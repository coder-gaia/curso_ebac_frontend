/// <reference types="cypress" />

describe('Insertion Tests', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Should add the contacts correctly', () => {
        cy.get('input[type="text"]').type('Alexandre Gaia')
        cy.get('input[type="email"]').type('alexandregaia10@gmail.com')
        cy.get('input[type="tel"]').type('42998756482')
        cy.get('.adicionar').click()
        cy.screenshot()
    })
})