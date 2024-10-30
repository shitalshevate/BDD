# BDD
Install cucumber Install below two plugins

>> npm install -save-dev cypress-cucumber-preprocessor

>> npm i -D cypress cypress-cucumber-preprocessor

#open cypress.config.js

>>const cucumber = require('cypress-cucumber-preprocessor').default
>>const { defineConfig } = require("cypress");

  module.exports = defineConfig({ 
  e2e: 
  {
  setupNodeEvents(on, config)
  { on('file:preprocessor', cucumber()) 
  },
  specPattern: "cypress/e2e/*.feature", }, });

  #open package.js 
  past last "cypress-cucumber-preprocessor": { "nonGlobalStepDefinitions": true, "step_definitions": "cypress/e2e/signUp/signUp.js }

  To run the code use following commands:
  npx cypress run --spec "C:\Users\ShitalShevate\Desktop\BDD\cypress\e2e\signUp.feature" --headed --browser chrome
  npx cypress open
