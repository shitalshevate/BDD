import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import testData from "../../fixtures/testData.json";
import signUpPage from "../../pageObjects/signUpPage";
import { faker } from "@faker-js/faker";

const url = "https://magento.softwaretestingboard.com/customer/account/create/";

//Open sign up page and fill the form and click on create an account
Given("Visit the Magento software create account URL", () => {
  cy.visit(url);
});

When("Enter the first Name", () => {
  signUpPage.enterFirstName(testData.firstName);
});

When("Enter the last Name", () => {
  signUpPage.enterLastName(testData.lastName);
});

When("Enter the email", () => {
  const generatedEmail = faker.internet.email();
  signUpPage.enterEmail(generatedEmail);
});

When("Enter the password", () => {
  signUpPage.enterPassword(testData.password);
});

When("Enter the confirm password", () => {
  signUpPage.enterConfirmPassword(testData.confirmPassword);
});

When("Click on Create an Account button", () => {
  signUpPage.clickRegisterButton();
});

Then("Verify the success message", () => {
  signUpPage.getSuccessMessage().should("be.visible");
});

//Enter password less than 8 symbols and verify whether validation message appears
Given("Visit the Magento software create account URL", () => {
  cy.visit(url);
});

When("Enter the first Name", () => {
  signUpPage.enterFirstName(testData.firstName);
});

When("Enter the last Name", () => {
  signUpPage.enterLastName(testData.lastName);
});

When("Enter the email", () => {
  const generatedEmail = faker.internet.email();
  signUpPage.enterEmail(generatedEmail);
});

When("Enter the password less than 8 symbols", () => {
  signUpPage.enterPassword(testData.wrongPassword);
});

Then("Verify the password validation message", () => {
  signUpPage
    .passwordValidation()
    .should("have.text", testData.passwordValidationMessage);
});

//Enter already signed up email address and check whether it lets you sign up.

Given("Visit the Magento software create account URL", () => {
  cy.visit(url);
});

When("Enter the first Name", () => {
  signUpPage.enterFirstName(testData.firstName);
});

When("Enter the last Name", () => {
  signUpPage.enterLastName(testData.lastName);
});

When("Enter the already existing email", () => {
  signUpPage.enterEmail(testData.email);
});

When("Enter the password", () => {
  signUpPage.enterPassword(testData.password);
});

When("Enter the confirm password", () => {
  signUpPage.enterConfirmPassword(testData.confirmPassword);
});

When("Click on Create an Account button", () => {
  signUpPage.clickRegisterButton();
});

Then("Verify the validation message for already existing email", () => {
  signUpPage
    .existingEmailValidation()
    .should("have.text", testData.existingEmailValidationMessage);
});

//Enter mismatch password and  verify whether validation message appears
Given("Visit the Magento software create account URL", () => {
    cy.visit(url);
  });
  
  When("Enter the first Name", () => {
    signUpPage.enterFirstName(testData.firstName);
  });
  
  When("Enter the last Name", () => {
    signUpPage.enterLastName(testData.lastName);
  });
  
  When("Enter the email", () => {
    const generatedEmail = faker.internet.email();
    signUpPage.enterEmail(generatedEmail);
  });
  
  When("Enter the password", () => {
    signUpPage.enterPassword(testData.password);
  });
  
  When("Enter the mismatch password", () => {
    signUpPage.enterConfirmPassword(testData.wrongPassword);
  });
  
  When("Click on Create an Account button", () => {
    signUpPage.clickRegisterButton();
  });
  
  Then("Verify the confirm password validation message", () => {
    signUpPage.passwordConfirmationValidation().should("have.text","Please enter the same value again.");
  });

  // Verify require message if first name field is empty
Given("Visit the Magento software create account URL", () => {
    cy.visit(url);
  });
  
  When("Enter the last Name", () => {
    signUpPage.enterLastName(testData.lastName);
  });
  
  When("Enter the email", () => {
    const generatedEmail = faker.internet.email();
    signUpPage.enterEmail(generatedEmail);
  });
  
  When("Enter the password", () => {
    signUpPage.enterPassword(testData.password);
  });
  
  When("Enter the confirm password", () => {
    signUpPage.enterConfirmPassword(testData.confirmPassword);
  });
  
  When("Click on Create an Account button", () => {
    signUpPage.clickRegisterButton();
  });
  
  Then("Verify the first name required message", () => {
    signUpPage.requireMessageFirstName().should("have.text","This is a required field.");
  });
