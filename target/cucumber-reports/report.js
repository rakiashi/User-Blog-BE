$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/resources/features/UserBlogs.feature");
formatter.feature({
  "name": "Verify Email formats from comments of each user posts",
  "description": "  Description : This test is to verify the APIs from User Blog on user , posts and comments before developing the UI\n                This test also helps in monitoring the health of the APIs",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying email formats from each comments of user posts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@requirements"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request for list of users",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Users.iSendAGETRequestForListOfUsers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search user as \"Delphine\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Users.iSearchUserAs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response status should be 200 OK",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeOK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response should contain below details",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseShouldContainBelowDetails(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request for user posts",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersPosts.iSearchForPostsFromUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response status should be 200 OK",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeOK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response should fetch all the posts from the user",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersPosts.theResponseShouldHaveBelowFields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send GET request from each post to verify email formats",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersComments.iFetchCommentsFromEachPostToVerifyEmailFormats()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Send PUT request and verify response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PUT"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a PUT request for \"valid\" user post \"81\"",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UsersPosts.iSendAPUTRequestForPostId(java.lang.String,java.lang.String,java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response status should be 200 OK",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeOK()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response of posts values should be updated",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersPosts.theResponseOfPostsValuesShouldBeUpdated(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Send POST request and verify response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Not_Found"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a POST request for post \"113\"",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UsersPosts.iSendAPOSTRequestForPost(java.lang.String,java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response status should be 404 NOT_FOUND",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeUnAuthorized()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Send PUT request and verify response as Internal Server Error",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@INTERNAL"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I send a PUT request for \"InValid\" user post \"110\"",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.UsersPosts.iSendAPUTRequestForPostId(java.lang.String,java.lang.String,java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response status should be 500 INTERNAL SERVER ERROR",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeInternalServerError()"
});
formatter.result({
  "status": "passed"
});
});