@REQ_MCF-36
Feature: Car Model - Overview Page - Basic
  As a visitor
  I want to have a list of all CAR MODELs (incl. some basic information)
  So I can scroll through them to find interesting ones (e.g. strange name, very old, built for a very long time)

  @RULE_MCF-61
  Rule: A list with all CAR MODELs is displayed

  @TEST_MCF-80 @implemented
  Scenario: A list of all CAR MODELs is displayed
    Given there exist 2618 CAR MODELs
    When the user visits the "CAR MODEL" overview page
    Then the CAR MODEL list should be displayed
    And the CAR MODEL list should contain 2618 items
    And each item in the CAR MODEL list should contain the primary CAR MODEL information
    And each item in the CAR MODEL list should link to the respective detail page
