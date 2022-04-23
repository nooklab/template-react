// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('login', (username, password) => {
//     cy.session([username, password], () => {
//         cy.visit('/login')
//         cy.get('[data-test=user]').type(username)
//         cy.get('[data-test=password]').type(password)
//         cy.get('#login').click()
//         cy.get('#logged-in-menu')
//     })
// })

import 'cypress-file-upload';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const fbConfig = {
    // Your config from Firebase Console
    "apiKey": "AIzaSyDGxTt429xEgj_2xbsr-6VSPhHFnfjEDJI",
    "authDomain": "d100-blues-dev.firebaseapp.com",
    "projectId": "d100-blues-dev",
    "storageBucket": "d100-blues-dev.appspot.com",
    "messagingSenderId": "830136592695",
    "appId": "1:830136592695:web:50d328ea9315f26bb392b2"

};

firebase.initializeApp(fbConfig);
Cypress.Commands.add('login', (username, password) => {
    firebase.auth().signInWithEmailAndPassword(username, password).then((r) => {})
    // cy.visit('/login')
    // cy.get('[data-test=username]').type(username)
    // cy.get('[data-test=password]').type(password)
    // cy.get('#login').click()
    // cy.url().should('contain', '/login-successful')
})

// attachCustomCommands({ Cypress, cy, firebase });
