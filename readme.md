## Unexpected pecularities 

Look at the code below. What is the value of ```user``` in the lambda function?
```javascript
    cy.visit('https://accounts.google.com')
    let username = cy.readFile('cypress/credentials.json').its('username')
    let password = cy.readFile('cypress/credentials.json').its('password')

    username.then((user) => {
        cy.get('#Email').type(user + '{Enter}')
    })

    password.then((pass) => {
        cy.get('#Passwd').type(pass + '{Enter}')
    })
```
The value assigned to ```user``` is the password and not the username.  The desired results can be achieved by
 calling ```then``` immediately after the first call to ```its```.
 
 
