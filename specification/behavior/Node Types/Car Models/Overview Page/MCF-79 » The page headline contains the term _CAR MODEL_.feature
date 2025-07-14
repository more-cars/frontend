@REQ_MCF-36
Feature: Car Model - Overview Page - Basic
  As a visitor
  I want to have a list of all CAR MODELs (incl. some basic information)
  So I can scroll through them to find interesting ones (e.g. strange name, very old, built for a very long time)

  @RULE_MCF-64
  Rule: A headline is displayed, indicating a list of all CAR MODELs

  @TEST_MCF-79 @implemented
  Scenario: The page headline contains the term "CAR MODEL"
    When the user visits the "CAR MODEL" overview page
    Then the page headline should contain the term "CAR MODEL"
