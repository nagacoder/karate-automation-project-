Feature: User API Tests

  Background:
    * url 'https://jsonplaceholder.typicode.com'
    * header Accept = 'application/json'

  Scenario: Get user details
    Given path 'users/1'
    When method GET
    Then status 200
    And match response contains { id: 1 }
    And match response.name == '#string'
    And match response.email == '#string'