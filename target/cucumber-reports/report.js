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
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.reflection.ReflectionCache\r\n\tat org.codehaus.groovy.runtime.dgmimpl.NumberNumberMetaMethod.\u003cclinit\u003e(NumberNumberMetaMethod.java:33)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.createMetaMethodFromClass(MetaClassRegistryImpl.java:258)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:111)\r\n\tat org.codehaus.groovy.runtime.metaclass.MetaClassRegistryImpl.\u003cinit\u003e(MetaClassRegistryImpl.java:86)\r\n\tat groovy.lang.GroovySystem.\u003cclinit\u003e(GroovySystem.java:36)\r\n\tat org.codehaus.groovy.runtime.InvokerHelper.\u003cclinit\u003e(InvokerHelper.java:86)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.createMap(ScriptBytecodeAdapter.java:635)\r\n\tat io.restassured.internal.ResponseParserRegistrar.\u003cinit\u003e(ResponseParserRegistrar.groovy)\r\n\tat io.restassured.RestAssured.\u003cclinit\u003e(RestAssured.java:347)\r\n\tat stepDefinitions.Hooks.setUp(Hooks.java:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I send a GET request for list of users",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Users.iSendAGETRequestForListOfUsers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I search user as \"Delphine\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Users.iSearchUserAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The response status should be 200 OK",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeOK()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "I send a GET request for user posts",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersPosts.iSearchForPostsFromUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The response status should be 200 OK",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeOK()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The response should fetch all the posts from the user",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.UsersPosts.theResponseShouldHaveBelowFields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I send GET request from each post to verify email formats",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.UsersComments.iFetchCommentsFromEachPostToVerifyEmailFormats()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class io.restassured.RestAssured\r\n\tat stepDefinitions.Hooks.setUp(Hooks.java:12)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "The response status should be 200 OK",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeOK()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class io.restassured.RestAssured\r\n\tat stepDefinitions.Hooks.setUp(Hooks.java:12)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "The response status should be 404 NOT_FOUND",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeUnAuthorized()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class io.restassured.RestAssured\r\n\tat stepDefinitions.Hooks.setUp(Hooks.java:12)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "The response status should be 500 INTERNAL SERVER ERROR",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Users.theResponseStatusShouldBeInternalServerError()"
});
formatter.result({
  "status": "skipped"
});
});