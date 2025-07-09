@REQ_MCF-34
Feature: Brand - Overview Page - Basic
  As a visitor
  I want to to be able to scroll through all BRANDs
  So I can find the BRAND for which I forget the name of

  @RULE_MCF-66
  Rule: An information is displayed when there exist no BRANDs

  @TEST_MCF-78 @implemented
  Scenario: An information is displayed when there exist no BRANDs
    Given there exist 0 BRANDs
    When the user visits the "BRAND" overview page
    Then the BRAND list should not be displayed
    And a message should be displayed that there are no BRANDs
