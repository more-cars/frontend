@REQ_MCF-35
Feature: Brand - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each BRAND
  So every information about it can be found in one place

  @RULE_MCF-69
  Rule: An error message is displayed when the requested BRAND does not exist

  @TEST_MCF-88 @implemented
  Scenario: An error message is displayed when the requested BRAND does not exist
    Given there exists no BRAND "Audi"
    When the user visits the detail page of the "BRAND" "Audi"
    Then a message should be displayed that this BRAND does not exist
