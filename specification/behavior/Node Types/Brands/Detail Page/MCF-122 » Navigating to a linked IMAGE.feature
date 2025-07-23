@REQ_MCF-40
Feature: Brand - Detail Page - Image Gallery
  As a visitor
  On the BRAND detail page
  I want to see a gallery of all attached IMAGEs
  So I can see how the BRAND logo evolved over the time

  @RULE_MCF-121
  Rule: Each IMAGE links to the respective detail page

  @TEST_MCF-122 @implemented
  Scenario: Navigating to a linked IMAGE
    Given there exists a "BRAND" "Jaguar"
    And there exists an "IMAGE" "front-left"
    And IMAGE "front-left" is connected to BRAND "Jaguar"
    When the user visits the detail page of the "BRAND" "Jaguar"
    And the user follows the link to the IMAGE "front-left"
    Then the user should have been redirected to the detail page of the IMAGE "front-left"
