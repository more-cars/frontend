@REQ_MCF-49
Feature: Image - Detail Page - Connected Nodes
  As a contributor
  On the IMAGE detail page
  I want to see all connected NODEs
  So I can find out where a connection might be missing

  @RULE_MCF-116
  Rule: Each NODE links to the respective detail page

  @TEST_MCF-119 @implemented
  Scenario: Navigating to a linked NODE
    Given there exists an "IMAGE" "BMW logo"
    And there exists a "BRAND" "BMW"
    And BRAND "BMW" is connected to IMAGE "BMW logo"
    When the user visits the detail page of the "IMAGE" "BMW logo"
    And the user follows the link to the BRAND "BMW"
    Then the user should have been redirected to the detail page of the BRAND "BMW"
