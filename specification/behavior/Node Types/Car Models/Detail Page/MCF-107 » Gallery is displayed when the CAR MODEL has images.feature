@REQ_MCF-41
Feature: Car Model - Detail Page - Image Gallery
  As a visitor
  On the CAR MODEL detail page
  I want to see a gallery of all attached IMAGEs
  So I can get a visual impression of the car from different angles

  @RULE_MCF-105
  Rule: All IMAGEs of the CAR MODEL are displayed in a separate gallery section

  @TEST_MCF-107 @implemented
  Scenario: Gallery is displayed when the CAR MODEL has images
    Given there exists a "CAR MODEL" "Camaro"
    And there exists an "IMAGE" "front"
    And IMAGE "front" is connected to CAR MODEL "Camaro"
    When the user visits the detail page of the "CAR MODEL" "Camaro"
    Then the page should contain an IMAGE section
    And the IMAGE section should contain the IMAGE "front"
