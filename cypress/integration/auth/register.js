/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/10/08
 */



describe('Register', () => {

    before(() => {
        cy.visit('/logout') // change URL to match your dev URL
        cy.wait(1000)
    })

    beforeEach(() => {
        cy.visit('/register') // change URL to match your dev URL
        cy.get('#username').type('whammer0@gmail.com')
        cy.get('#password').type('11111111')
        cy.get('#passwordConfirm').type('11111111')
        cy.get('#company').type('테스트컴패니')
        cy.get('#manager').type('테스트 매니저')
        cy.get('#managerEmail').type('whammer0@gmail.com')
        cy.get('#managerPhone').type('010-0000-0000')

        // cy.get('[data-test=password]').type('11111111')      #password
        // cy.get('[data-test=user]').type('adv1@nooklab.com')
        // cy.get('[data-test=password]').type('11111111')
    })

    // it('no password', () => {
    //     // cy.get('[data-cy=user]').type('adv1@nooklab.com')
    //     cy.get('[data-test=password]').clear()
    //     cy.get('#login').click()
    //     cy.get('[data-cy=error]').should('contain', '필수')
    // })

    it('success', () => {
        cy.get('#register').click()
        // cy.get('[data-cy=submit]').click()
        // cy.get('#login').click()
        // cy.url().should('contain', '/login-successful')
        // cy.get('#logged-in-menu')
    })
})
