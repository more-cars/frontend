@REQ_MCF-46
Feature: Image - Overview Page - Basic
  As a visitor
  I want to have a list of all IMAGEs (incl. some basic information)
  So I can scroll through them to find interesting ones

  @RULE_MCF-68
  Rule: An information is displayed when there exist no IMAGEs

  @TEST_MCF-84 @implemented
  Scenario: An information text is displayed when there exist no IMAGEs
    Given there exist 0 IMAGEs
    When the user visits the "IMAGE" overview page
    Then the IMAGE list should not be displayed
    And a message should be displayed that there are no IMAGEs
