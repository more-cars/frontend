@REQ_MCF-47
Feature: Image - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each IMAGE
  So every information about it can be found in one place

  @RULE_MCF-54
  Rule: A headline with the IMAGE name is displayed

  @TEST_MCF-109 @implemented
  Scenario: The page headline contains the IMAGE name
    Given there exists an "IMAGE" "BMW logo"
    When the user visits the detail page of the "IMAGE" "BMW logo"
    Then the page headline should contain the term "BMW logo"
