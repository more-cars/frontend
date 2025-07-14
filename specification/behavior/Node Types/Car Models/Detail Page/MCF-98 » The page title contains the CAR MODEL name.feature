@REQ_MCF-37
Feature: Car Model - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each CAR MODEL
  So every information about it can be found in one place

  @RULE_MCF-55
  Rule: The name of the CAR MODEL is included in the page title

  @TEST_MCF-98 @implemented
  Scenario: The page title contains the CAR MODEL name
    Given there exists a CAR MODEL "Zonda"
    When the user visits the detail page of the CAR MODEL "Zonda"
    Then the page title should contain the term "Zonda"
