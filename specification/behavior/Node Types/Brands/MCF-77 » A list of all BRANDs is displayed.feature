@REQ_MCF-34
Feature: Brand - Overview Page - Basic
  As a visitor
  I want to to be able to scroll through all BRANDs
  So I can find the BRAND for which I forget the name of

  @RULE_MCF-60
  Rule: A list with all BRANDs is displayed

  @TEST_MCF-77 @implemented
  Scenario: A list of all BRANDs is displayed
    Given there exist 10 BRANDs
    When the user visits the "BRAND" overview page
    Then the BRAND list should be displayed
    And the BRAND list should contain 10 items
    And each item in the BRAND list should contain the primary BRAND information
    And each item in the BRAND list should link to the respective detail page
