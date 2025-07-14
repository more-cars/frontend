@REQ_MCF-35
Feature: Brand - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each BRAND
  So every information about it can be found in one place

  @RULE_MCF-50
  Rule: A fact sheet with all BRAND properties is displayed

  @TEST_MCF-87 @implemented
  Scenario: The page contains a fact sheet with all BRAND properties
    Given there exists a BRAND "Audi"
    When the user visits the detail page of the BRAND "Audi"
    Then the page should contain a fact sheet
    And the fact sheet should display entries for each of the following properties
      | _property_ |
      | name       |
      | full_name  |
      | founded    |
      | defunct    |
      | wmi        |
      | hsn        |
