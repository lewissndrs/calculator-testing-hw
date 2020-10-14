// https://docs.cypress.io/api/introduction/api.html

// const { get } = require("core-js/fn/dict");

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('number buttons should update the running total display', () => {
    cy.get('#number5').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain','53')
  })

  it('arithmetical operations should update the display with results',() => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain','6')
  })

  it('multiple operations can be chained together',() => {
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain','22')
  })

  it('should be able to calculate negative numbers',() => {
    cy.get('#number4').click();
    cy.get('#operator_subtract').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain','-4')
  })

  it('should be able to calculate large numbers',() => {
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number7').click();
    cy.get('#number6').click();
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#number3').click();
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain','121932631112635260')
  })

  it('should be able to calculate decimal numbers',()=>{
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain','2.5')
  })

  it('should display ERROR in case of division by zero',() => {
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain','ERROR')
  })
})
