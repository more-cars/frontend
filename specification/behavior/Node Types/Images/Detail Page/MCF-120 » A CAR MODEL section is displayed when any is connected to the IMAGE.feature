@REQ_MCF-49
Feature: Image - Detail Page - Connected Nodes
  As a contributor
  On the IMAGE detail page
  I want to see all connected NODEs
  So I can find out where a connection might be missing

  @RULE_MCF-114
  Rule: For each node type the IMAGE is connected to a separate section displayed

  @TEST_MCF-120 @implemented
  Scenario: A CAR MODEL section is displayed when any is connected to the IMAGE
    Given there exists an "IMAGE" "front bumper"
    And there exists a "CAR MODEL" "Seicento"
    And CAR MODEL "Seicento" is connected to IMAGE "front bumper"
    When the user visits the detail page of the "IMAGE" "front bumper"
    Then the page should contain a CAR MODEL section
    And the CAR MODEL section should contain the CAR MODEL "Seicento"
