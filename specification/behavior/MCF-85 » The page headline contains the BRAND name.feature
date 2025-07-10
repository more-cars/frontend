@REQ_MCF-35
Feature: Brand - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each BRAND
  So every information about it can be found in one place

  @RULE_MCF-51
  Rule: A headline with the BRAND name is displayed

  @TEST_MCF-85 @implemented
  Scenario: The page headline contains the BRAND name
    Given there exists a BRAND "Audi"
    When the user visits the detail page of the BRAND "Audi"
    Then the page headline should contain the term "Audi"
