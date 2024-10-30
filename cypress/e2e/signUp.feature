Feature: End to end sign up test cases

    Feature Description This feature file contains the end-to-end test cases for the sign-up functionality.

    Scenario: Open sign up page and fill the form and click on create an account
        Given Visit the Magento software create account URL
        When Enter the first Name
        When Enter the last Name
        When Enter the email
        When Enter the password
        When Enter the confirm password
        When Click on Create an Account button
        Then Verify the success message 

    Scenario: Enter password less than 8 symbols and verify whether validation message appears
      Given Visit the Magento software create account URL
        When Enter the first Name
        When Enter the last Name
        When Enter the email
        When Enter the password less than 8 symbols
        Then Verify the password validation message

    Scenario: Enter already signed up email address and check whether it lets you sign up.
        Given Visit the Magento software create account URL
        When Enter the first Name
        When Enter the last Name
        When Enter the already existing email
        When Enter the password
        When Enter the confirm password
        When Click on Create an Account button
        Then Verify the validation message for already existing email

    Scenario: Enter mismatch password and  verify whether validation message appears
        Given Visit the Magento software create account URL
        When Enter the first Name
        When Enter the last Name
        When Enter the email
        When Enter the password
        When Enter the mismatch password
        When Click on Create an Account button
        Then Verify the confirm password validation message

    Scenario: Verify require message if first name field is empty
        Given Visit the Magento software create account URL
        When Enter the last Name
        When Enter the email
        When Enter the password
        When Enter the confirm password
        When Click on Create an Account button
        Then Verify the first name required message

    


    



    