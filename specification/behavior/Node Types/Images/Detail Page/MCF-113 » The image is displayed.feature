@REQ_MCF-47
Feature: Image - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each IMAGE
  So every information about it can be found in one place

  @RULE_MCF-59
  Rule: The image is displayed in a medium size

  @TEST_MCF-113 @implemented
  Scenario: The image is displayed
    Given there exists an "IMAGE" "BMW logo"
    When the user visits the detail page of the "IMAGE" "BMW logo"
    Then the page should contain a section with the rendered image
