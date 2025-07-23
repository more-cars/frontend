@REQ_MCF-41
Feature: Car Model - Detail Page - Image Gallery
  As a visitor
  On the CAR MODEL detail page
  I want to see a gallery of all attached IMAGEs
  So I can get a visual impression of the car from different angles

  @RULE_MCF-106
  Rule: The IMAGE gallery is not displayed when no IMAGEs are connected to the CAR MODEL

  @TEST_MCF-124 @implemented
  Scenario: Navigating to a linked IMAGE
    Given there exists a "CAR MODEL" "Camaro"
    And there exists an "IMAGE" "front"
    And IMAGE "front" is connected to CAR MODEL "Camaro"
    When the user visits the detail page of the "CAR MODEL" "Camaro"
    And the user follows the link to the IMAGE "front"
    Then the user should have been redirected to the detail page of the IMAGE "front"
