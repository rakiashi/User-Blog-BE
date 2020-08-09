package stepDefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import utilities.Utils;
import java.util.Map;

public class UsersPosts extends Utils {


    @Then("I send a GET request for user posts")
    public void iSearchForPostsFromUser() {
        try {
            sendGETRequestUserPosts();
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to send get request on user posts: " + e);
        }
    }
    @Then("The response should fetch all the posts from the user")
    public void theResponseShouldHaveBelowFields() {
        try {
            verifyResponseList();
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to verify list of posts done by user: " + e);
        }
    }

    @When("I send a PUT request for {string} user post {string}")
    public void iSendAPUTRequestForPostId(String existStatus,String postId,Map<String, String> object) {
        try {
            sendPUTRequestWithPostIds(existStatus,postId, object);
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to send put request with fields: " + e);
        }
    }

    @Then("The response of posts values should be updated")
    public void theResponseOfPostsValuesShouldBeUpdated(Map<String, String> fields) {
        try {
            verifyFieldsUpdates(fields);
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to verify fields in response after update: " + e);
        }
    }

    @When("I send a POST request for post {string}")
    public void iSendAPOSTRequestForPost(String postId,Map<String, String> object) {
        try {
            sendPOSTRequestWithPostIds(postId, object);
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to send put request with fields: " + e);
        }
    }

}
