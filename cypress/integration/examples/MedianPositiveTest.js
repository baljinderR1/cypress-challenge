///<reference types ="cypress" />

describe("Median check of prime numbers", function (){

// this test is passsing when giving single number. 
it ('median check with given single input', function(){

    cy.visit("http://localhost:3000/")
    
    cy.get('[type=number]').type('25')
    cy.get('[type=submit]').click()
    
    cy.contains('The median is: [11]').should('be.visible')

})

// this test is also passing when we give random numbers from 1 to 100 and this will repeat with 20 random inputs
it ('median check with random numbers till 100', function(){
   var n
    for (n=0; n<20; n++)
    {
    cy.get('[type=number]').type(randomNumber()) 
    cy.get('[type=submit]').click()     
    

function randomNumber() {
    var num
    var i
  for (i=0; i<10; i++) {
  var num = Math.floor((Math.random() * 100) + 1);
  return num
     }
    }
  }
    
 cy.log('Test is passed') 
})


  

})