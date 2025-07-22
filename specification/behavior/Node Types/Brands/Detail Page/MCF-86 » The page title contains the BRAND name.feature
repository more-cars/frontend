@REQ_MCF-35
Feature: Brand - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each BRAND
  So every information about it can be found in one place

  @RULE_MCF-52
  Rule: The name of the BRAND is included in the page title

  @TEST_MCF-86 @implemented
  Scenario: The page title contains the BRAND name
    Given there exists a "BRAND" "Audi"
    When the user visits the detail page of the "BRAND" "Audi"
    Then the page title should contain the term "Audi"
