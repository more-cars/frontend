Feature: Dummy

  @RULE_MCF-123
  Rule: Each IMAGE links to the respective detail page

  @TEST_MCF-124 @implemented
  Scenario: Navigating to a linked IMAGE
    Given there exists a "CAR MODEL" "Camaro"
    And there exists an "IMAGE" "front"
    And the IMAGE "front" is connected to CAR MODEL "Camaro"
    When the user visits the detail page of the "CAR MODEL" "Camaro"
    And the user follows the link to the IMAGE "front"
    Then the user should have been redirected to the detail page of the IMAGE "front"