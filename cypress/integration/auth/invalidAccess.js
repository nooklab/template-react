/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/10/09
 */


describe('campaign', () => {

    before(() => {
        cy.visit('/logout') // change URL to match your dev URL
    })

    beforeEach(() => {
        // cy.visit('/campaign') // change URL to match your dev URL
        // cy.get('[data-cy=user]').type('adv1@nooklab.com')
        // cy.get('[data-cy=password]').type('11111111')
    })

    it('campaign', () => {
        cy.visit('/campaign') // change URL to match your dev URL
        cy.url().should("eq", Cypress.config().baseUrl + '/')
    })

})

/*
 */
