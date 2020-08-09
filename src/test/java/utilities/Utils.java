package utilities;

import io.cucumber.core.gherkin.vintage.internal.gherkin.ast.DataTable;
import io.restassured.path.json.JsonPath;
import org.json.simple.JSONObject;
import org.junit.Assert;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import java.net.HttpURLConnection;
import java.util.*;

import static io.restassured.RestAssured.given;

public class Utils extends ServiceConstant{

    static Response response;
    static RequestSpecification request;

    public void sendGETRequestUserList() {
        response = given().when()
                .get("/users");
        verifyStatusOK();
        List<String> usersCount = response.jsonPath().getList("$");
        Assert.assertTrue("There are users available", usersCount.size()>0);
    }

    public void sendGETRequestUserName(String actualUserName) {
        response = given().when()
                .get("/users?username="+actualUserName);
        verifyStatusOK();
        String jsonString=response.asString();
         userId= JsonPath.from(jsonString).get("id[0]");
        String expectedUserName= JsonPath.from(jsonString).get("username[0]");
        Assert.assertEquals(expectedUserName,actualUserName);
    }

    public void verifyStatusOK() {
        Assert.assertEquals(HttpURLConnection.HTTP_OK, response.getStatusCode());
    }

    public void verifyStatusInternalServer() {
        Assert.assertEquals(HttpURLConnection.HTTP_INTERNAL_ERROR, response.getStatusCode());
    }

    public void verifyStatusNotFound() {
        Assert.assertEquals(HttpURLConnection.HTTP_NOT_FOUND, response.getStatusCode());
    }


    public void verifyFieldsUpdated(Map<String, String> fields) {
        fields.forEach((k, v) -> Assert.assertEquals(response.jsonPath().getString(k+"[0]"), v));

    }

    public void verifyFieldsUpdates(Map<String, String> fields) {
        String jsonString=response.asString();
        fields.forEach((k, v) -> Assert.assertEquals(response.jsonPath().getString(k), v));
    }

    public void sendGETRequestUserPosts() {
        response = given().when()
                .get("/users/"+userId+"/posts");
        verifyStatusOK();
    }

    public void verifyResponseList() {
        List<String> userPostsCount = response.jsonPath().getList("$");
        userPostsId = response.jsonPath().getList("id");
        Assert.assertTrue("There are user posts available", userPostsCount.size()>0);
    }

    public void verifyEmailFormatsFromEachCommentsOfUserPosts() {
      for(Integer pid : userPostsId) {
          response = given().when()
                  .get("/posts/"+pid+"/comments");
          verifyStatusOK();
          String jsonString=response.asString();
          String EmailNotValid="sample?test@gmail.com";
          String expectedEmail= JsonPath.from(jsonString).get("email[0]");
          if (expectedEmail.contains("@") && expectedEmail.contains(".")){
              Assert.assertEquals("Email formats is good","Email formats is good");
              Scanner sc = new Scanner(System.in);
              String regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
              boolean result = expectedEmail.matches(regex);
              if(result) {
                  Assert.assertTrue("Email-id is Valid",result);
              } else {
                  Assert.assertTrue("Email-id is not valid",result);
              }
          }
      }
    }

    public void sendPUTRequestWithPostIds(String existStatus,String postId,Map<String, String> Object){
        response = given().contentType("application/json").body(JSONObject.toJSONString(Object)).when().put("/posts/"+postId);
        if(existStatus.equalsIgnoreCase("Valid")) {
            verifyStatusOK();
        }
    }
    public void sendPOSTRequestWithPostIds(String postId,Map<String, String> Object){
        response = given().contentType("application/json").body(JSONObject.toJSONString(Object)).when().post("/posts/"+postId);
    }
}
