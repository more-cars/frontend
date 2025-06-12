Feature: Brands Overview Page

  Scenario: The BRAND overview page displays a list of all brands
    Given there exist multiple brands
    When the user visits the brand overview page
    Then a list of all brands should be displayed
