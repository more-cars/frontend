@REQ_MCF-37
Feature: Car Model - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each CAR MODEL
  So every information about it can be found in one place

  @RULE_MCF-57
  Rule: A fact sheet with all CAR MODEL properties is displayed

  @TEST_MCF-99 @implemented
  Scenario: The page contains a fact sheet with all CAR MODEL properties
    Given there exists a CAR MODEL "Zonda"
    When the user visits the detail page of the CAR MODEL "Zonda"
    Then the page should contain a fact sheet
    And the fact sheet should display entries for each of the following properties
      | _property_       |
      | name             |
      | generation       |
      | internal_code    |
      | built_from       |
      | built_to         |
      | total_production |
