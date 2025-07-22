@REQ_MCF-47
Feature: Image - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each IMAGE
  So every information about it can be found in one place

  @RULE_MCF-71
  Rule: An error message is displayed when the requested IMAGE does not exist

  @TEST_MCF-112 @implemented
  Scenario: An error message is displayed when the requested IMAGE does not exist
    Given there exists no "IMAGE" "BMW logo"
    When the user visits the detail page of the "IMAGE" "BMW logo"
    Then a message should be displayed that this IMAGE does not exist
