Feature: Verify Email formats from comments of each user posts
  Description : This test is to verify the APIs from User Blog on user , posts and comments before developing the UI
                This test also helps in monitoring the health of the APIs

  @requirements
  Scenario:Verifying email formats from each comments of user posts
    Given I send a GET request for list of users
    When I search user as "Delphine"
    Then The response status should be 200 OK
    And The response should contain below details
      | id       | 9                       |
      | name     | Glenna Reichert         |
      | username | Delphine                |
      | email    | Chaim_McDermott@dana.io |
    Then I send a GET request for user posts
    Then The response status should be 200 OK
    And The response should fetch all the posts from the user
    Then I send GET request from each post to verify email formats

 @PUT
  Scenario: Send PUT request and verify response
    When I send a PUT request for "valid" user post "81"
      | userId | 9                    |
      | id     | 81                   |
      | title  | API Automation Title |
      | body   | API Automation Body  |
    Then The response status should be 200 OK
    And The response of posts values should be updated
      | userId | 9                    |
      | id     | 81                   |
      | title  | API Automation Title |
      | body   | API Automation Body  |

 @Not_Found
  Scenario: Send POST request and verify response
    When I send a POST request for post "113"
      | userId | 8                         |
      | id     | 113                       |
      | title  | API Automation Title Post |
      | body   | API Automation Body Post  |
    Then The response status should be 404 NOT_FOUND

  @INTERNAL
  Scenario: Send PUT request and verify response as Internal Server Error
    When I send a PUT request for "InValid" user post "110"
      | userId | 7                        |
      | id     | 110                      |
      | title  | API Automation Title PUT |
      | body   | API Automation Body PUT  |
    Then The response status should be 500 INTERNAL SERVER ERROR



