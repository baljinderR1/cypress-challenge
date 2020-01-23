///<reference types ="cypress" />

describe("Median check of prime numbers with negative inputs", function (){

  //This test is giving invalid results when we give negative numbers and it is shwowing blank result consistently 
  //like The median is : [,] 
  //Suggestion: we should see a warning message when we give negative number

    it ('median check with negative inputs', function(){
    
        cy.visit("http://localhost:3000/")
        
        var n
        for (n=0; n<10; n++)
        {
        cy.get('[type=number]').type(randomNumber()) 
        cy.get('[type=submit]').click()     
        
    
    function randomNumber() {
        var num
        var i
      for (i=0; i<10; i++) {
      var num = Math.floor((Math.random() * 100) + 1);
      return -num
         }
        }
      }        
     cy.log('Test is failing because showing invalid results consistently')
      
    })

    // This test is failing because UI is not showing any warning message in case we don't give any input and press submit button by mistake
    // Suggestion : we should see a warning message when user don't give any input
     it ('median check with blank input', function(){
        
            cy.get('[type=number]').type(' ')
            cy.get('[type=submit]').click()

            cy.contains('Enter the number in input field first').should('be.visible')
        
        }) 

    })