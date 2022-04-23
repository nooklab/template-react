/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/10/08
 */



describe('Login', () => {

    before(() => {
        cy.visit('/logout') // change URL to match your dev URL
    })

    beforeEach(() => {
        cy.visit('/login') // change URL to match your dev URL
        cy.get('[data-test=user]').type('adv1@nooklab.com')
        cy.get('[data-test=password]').type('11111111')
    })

    // it('no password', () => {
    //     // cy.get('[data-cy=user]').type('adv1@nooklab.com')
    //     cy.get('[data-test=password]').clear()
    //     cy.get('#login').click()
    //     cy.get('[data-cy=error]').should('contain', '필수')
    // })

    it('success', () => {
        // cy.get('[data-cy=submit]').click()
        cy.get('#login').click()
        // cy.url().should('contain', '/login-successful')
        cy.get('#logged-in-menu')
    })
})
