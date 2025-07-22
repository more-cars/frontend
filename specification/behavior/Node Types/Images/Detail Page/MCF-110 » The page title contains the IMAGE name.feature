@REQ_MCF-47
Feature: Image - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each IMAGE
  So every information about it can be found in one place

  @RULE_MCF-56
  Rule: The name of the IMAGE is included in the page title

  @TEST_MCF-110 @implemented
  Scenario: The page title contains the IMAGE name
    Given there exists an "IMAGE" "BMW logo"
    When the user visits the detail page of the "IMAGE" "BMW logo"
    Then the page title should contain the term "BMW logo"
