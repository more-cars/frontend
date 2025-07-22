@REQ_MCF-39
Feature: Brand - Detail Page - Connected Car Models
  As a visitor
  On the BRAND detail page
  I want to see all CAR MODELs they have created
  So I can get an overview over their range of cars

  @RULE_MCF-72
  Rule: All CAR MODELs of the BRAND are displayed in a separate section

  @TEST_MCF-94 @implemented
  Scenario: Section with all connected CAR MODELs
    Given there exists a "BRAND" "Renault"
    And there exists a "CAR MODEL" "Twingo"
    And CAR MODEL "Twingo" is connected to BRAND "Renault"
    When the user visits the detail page of the "BRAND" "Renault"
    Then the page should contain a CAR MODEL list
    And the CAR MODEL list should contain the CAR MODEL "Twingo"
