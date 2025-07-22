@REQ_MCF-37
Feature: Car Model - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each CAR MODEL
  So every information about it can be found in one place

  @RULE_MCF-70
  Rule: An error message is displayed when the requested CAR MODEL does not exist

  @TEST_MCF-100 @implemented
  Scenario: An error message is displayed when the requested CAR MODEL does not exist
    Given there exists no CAR MODEL "Zonda"
    When the user visits the detail page of the "CAR MODEL" "Zonda"
    Then a message should be displayed that this CAR MODEL does not exist
