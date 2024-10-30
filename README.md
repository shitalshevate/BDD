BDD with Cypress and Cucumber

Running Tests
To execute the tests, use the following commands:

Headless Mode
Run in headless mode with Chrome:
npx cypress run --spec "<YOUR_DIRECTORY>/cypress/e2e/<YOUR_FEATURE_FILE>.feature" --headed --browser chrome

Interactive Mode
Open the Cypress Test Runner in interactive mode:
npx cypress open
