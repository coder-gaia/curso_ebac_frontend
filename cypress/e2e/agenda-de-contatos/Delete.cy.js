/// <reference types="cypress" />

describe('Deleting Tests', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.wait(2000)
    })

    it('Should delete the contact correctly', () => {
        cy.get('.delete').first().click()
        cy.screenshot()
    })
})