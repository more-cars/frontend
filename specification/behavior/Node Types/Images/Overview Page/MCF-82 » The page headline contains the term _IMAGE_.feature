@REQ_MCF-46
Feature: Image - Overview Page - Basic
  As a visitor
  I want to have a list of all IMAGEs (incl. some basic information)
  So I can scroll through them to find interesting ones

  @RULE_MCF-65
  Rule: A headline is displayed, indicating a list of all IMAGEs

  @TEST_MCF-82 @implemented
  Scenario: The page headline contains the term "IMAGE"
    When the user visits the "IMAGE" overview page
    Then the page headline should contain the term "Image"
