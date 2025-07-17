@REQ_MCF-42
Feature: Car Model - Detail Page - Connected Brand
  As a visitor
  On the CAR MODEL detail page
  I want to see a link to the connected BRAND
  So I can find other CAR MODELs they have created

  @RULE_MCF-73
  Rule: A section which displays information about the connected BRAND is displayed

  @TEST_MCF-102 @implemented
  Scenario: Section with the connected BRAND
    Given there exists a CAR MODEL "Twingo"
    And there exists a BRAND "Renault"
    And BRAND "Renault" is connected to CAR MODEL "Twingo"
    When the user visits the detail page of the CAR MODEL "Twingo"
    Then the page should contain a BRAND section
    And the BRAND section should contain the BRAND "Renault"
