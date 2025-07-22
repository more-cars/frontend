@REQ_MCF-47
Feature: Image - Detail Page - Basic
  As a visitor
  I want to have a dedicated page for each IMAGE
  So every information about it can be found in one place

  @RULE_MCF-58
  Rule: A fact sheet with all IMAGE properties is displayed

  @TEST_MCF-111 @implemented
  Scenario: The page contains a fact sheet with all IMAGE properties
    Given there exists an "IMAGE" "BMW logo"
    When the user visits the detail page of the "IMAGE" "BMW logo"
    Then the page should contain a fact sheet
    And the fact sheet should display entries for each of the following properties
      | _property_         |
      | external_id        |
      | image_provider     |
      | name               |
      | description        |
      | creator            |
      | license            |
      | tags               |
      | source             |
      | image_url_original |
      | image_url_xxl      |
      | image_url_xl       |
      | image_url_l        |
      | image_url_m        |
      | image_url_s        |
      | image_url_xs       |
