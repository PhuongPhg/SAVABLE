# **Cypress Testing**

Cypress is a front end testing tool built for the modern web, a desktop application supports these operating systems Window, Linux Ubuntu, macOS.

## Installing Cypress

**Install npm**

Install download [npm](https://nodejs.org/en/). 

To check if you have npm installed you can run this command in your terminal: ```npm -v```

**Install Cypress**

``` cd /your/project/path```

Make sure your project already have a `node_modules` folder or `package.json` file. If not, you can run ```npm init```

The below command will install Cypress locally as a dev dependency for your project.

```npm install cypress --save-dev```

**To open Cypress**

On the project root, type in command ```npx cypress open```

## Try our testing files

To try our test

- Move the files in [cypress test\intergrations]([https://github.com/PhuongPhg/SAVABLE/tree/master/cypress%20test/integration](https://github.com/PhuongPhg/SAVABLE/tree/master/cypress test/integration)), paste all those files in your `cypress/integration` folder.
- Replace the [commands.js]([https://github.com/PhuongPhg/SAVABLE/blob/master/cypress%20test/support/commands.js](https://github.com/PhuongPhg/SAVABLE/blob/master/cypress test/support/commands.js)) to your cypress/support/commands.js

You don't need to clone our project git because we tested them in the demo website (except the log_in.js)

**Note**: 

- For some files like log_in.js, replace the link inside `cy.visit()` with the website link.

- If you want to test SAVABLE on XAMPP, you can update the baseURL in 'cypress.json' or change your Apache Listen Port Number to 8080