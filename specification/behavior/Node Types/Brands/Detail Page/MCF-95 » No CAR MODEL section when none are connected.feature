@REQ_MCF-39
Feature: Brand - Detail Page - Connected Car Models
  As a visitor
  On the BRAND detail page
  I want to see all CAR MODELs they have created
  So I can get an overview over their range of cars

  @RULE_MCF-75
  Rule: The CAR MODEL section is not displayed when none are connected to the BRAND

  @TEST_MCF-95 @implemented
  Scenario: No CAR MODEL section when none are connected
    Given there exists a BRAND "Renault"
    And no CAR MODELs are connected to BRAND "Renault"
    When the user visits the detail page of the BRAND "Renault"
    Then the page should contain no CAR MODEL list
