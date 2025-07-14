@REQ_MCF-37
Feature: Car Model - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each CAR MODEL
  So every information about it can be found in one place

  @RULE_MCF-53
  Rule: A headline with the CAR MODEL name is displayed

  @TEST_MCF-97 @implemented
  Scenario: The page headline contains the CAR MODEL name
    Given there exists a CAR MODEL "Zonda"
    When the user visits the detail page of the CAR MODEL "Zonda"
    Then the page headline should contain the term "Zonda"
