@REQ_MCF-40
Feature: Brand - Detail Page - Image Gallery
  As a visitor
  On the BRAND detail page
  I want to see a gallery of all attached IMAGEs
  So I can see how the BRAND logo evolved over the time

  @RULE_MCF-89
  Rule: All IMAGEs of the BRAND are displayed in a separate gallery section

  @TEST_MCF-92 @implemented
  Scenario: Gallery is displayed when the BRAND has images
    Given there exists a "BRAND" "Renault"
    And there exists an "IMAGE" "logo"
    And IMAGE "logo" is connected to BRAND "Renault"
    When the user visits the detail page of the "BRAND" "Renault"
    Then the page should contain an IMAGE section
    And the IMAGE section should contain the IMAGE "logo"
