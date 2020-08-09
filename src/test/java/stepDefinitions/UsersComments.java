package stepDefinitions;

import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.Utils;

public class UsersComments extends Utils {

    @Then("I send GET request from each post to verify email formats")
    public void iFetchCommentsFromEachPostToVerifyEmailFormats() {
        try {
            verifyEmailFormatsFromEachCommentsOfUserPosts();
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to verify response status 200 OK : " + e);
        }
    }
}
