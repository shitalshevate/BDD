class SignupPage {
  enterFirstName(firstName) {
    cy.get("#firstname").type(firstName);
  }

  enterLastName(lastName) {
    cy.get("#lastname").type(lastName);
  }

  enterEmail(email) {
    cy.get("#email_address").type(email);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  enterConfirmPassword(confirmPassword) {
    cy.get("#password-confirmation").type(confirmPassword);
  }

  clickRegisterButton() {
    cy.get("button[title='Create an Account']").click();
  }

  getSuccessMessage() { 
    return cy.get(".message-success > div");
  }

  passwordValidation() {
    return cy.get("#password-error");
  } 

  existingEmailValidation() {
    return cy.contains("There is already an account with this email address.");
  }

  requireMessageFirstName() {            
    return cy.get('#firstname-error');
  }

  passwordConfirmationValidation() {
    return cy.get('#password-confirmation-error');
  }
}

export default new SignupPage();
