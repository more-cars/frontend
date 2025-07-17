@REQ_MCF-39
Feature: Brand - Detail Page - Connected Car Models
  As a visitor
  On the BRAND detail page
  I want to see all CAR MODELs they have created
  So I can get an overview over their range of cars

  @RULE_MCF-75
  Rule: The CAR MODEL section is not displayed when none are connected to the BRAND

  @TEST_MCF-96 @implemented
  Scenario: Navigating to a linked CAR MODEL
    Given there exists a BRAND "Renault"
    And there exists a CAR MODEL "Twingo"
    And CAR MODEL "Twingo" is connected to BRAND "Renault"
    When the user visits the detail page of the BRAND "Renault"
    And the user follows the link to the CAR MODEL "Twingo"
    Then the user should have been redirected to the detail page of the CAR MODEL "Twingo"
