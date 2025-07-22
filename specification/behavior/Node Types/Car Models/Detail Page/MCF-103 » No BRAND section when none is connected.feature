@REQ_MCF-42
Feature: Car Model - Detail Page - Connected Brand
  As a visitor
  On the CAR MODEL detail page
  I want to see a link to the connected BRAND
  So I can find other CAR MODELs they have created

  @RULE_MCF-74
  Rule: The BRAND section is not displayed when none is attached to the CAR MODEL

  @TEST_MCF-103 @implemented
  Scenario: No BRAND section when none is connected
    Given there exists a "CAR MODEL" "Twingo"
    And no BRAND is connected to CAR MODEL "Twingo"
    When the user visits the detail page of the "CAR MODEL" "Twingo"
    Then the page should contain no BRAND section
