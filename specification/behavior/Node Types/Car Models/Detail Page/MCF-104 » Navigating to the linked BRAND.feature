@REQ_MCF-42
Feature: Car Model - Detail Page - Connected Brand
  As a visitor
  On the CAR MODEL detail page
  I want to see a link to the connected BRAND
  So I can find other CAR MODELs they have created

  @RULE_MCF-101
  Rule: The BRAND section links to the respective detail page

  @TEST_MCF-104 @implemented
  Scenario: Navigating to the linked BRAND
    Given there exists a CAR MODEL "Twingo"
    And there exists a BRAND "Renault"
    And BRAND "Renault" is connected to CAR MODEL "Twingo"
    When the user visits the detail page of the CAR MODEL "Twingo"
    And the user follows the link to the BRAND "Renault"
    Then the user should have been redirected to the detail page of the BRAND "Twingo"
