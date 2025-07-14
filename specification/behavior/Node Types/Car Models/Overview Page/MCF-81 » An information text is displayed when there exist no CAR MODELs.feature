@REQ_MCF-36
Feature: Car Model - Overview Page - Basic
  As a visitor
  I want to have a list of all CAR MODELs (incl. some basic information)
  So I can scroll through them to find interesting ones (e.g. strange name, very old, built for a very long time)

  @RULE_MCF-67
  Rule: An information is displayed when there exist no CAR MODELs

  @TEST_MCF-81 @implemented
  Scenario: An information text is displayed when there exist no CAR MODELs
    Given there exist 0 CAR MODELs
    When the user visits the "CAR MODEL" overview page
    Then the CAR MODEL list should not be displayed
    And a message should be displayed that there are no CAR MODELs
