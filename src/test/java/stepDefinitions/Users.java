package stepDefinitions;

import utilities.Utils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.Map;

public class Users extends Utils {


    @Given("I send a GET request for list of users")
    public void iSendAGETRequestForListOfUsers() {
        try {
            sendGETRequestUserList();
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to send get request user list: " + e);
        }
    }

    @When("I search user as {string}")
    public void iSearchUserAs(String userName) {
        try {
            sendGETRequestUserName(userName);
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to send get request on username: " + e);
        }
    }

    @Then("The response status should be 200 OK")
    public void theResponseStatusShouldBeOK() {
        try {
            verifyStatusOK();
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to verify response status 200 OK : " + e);
        }
    }

    @Then("The response should contain below details")
    public void theResponseShouldContainBelowDetails(Map<String, String> fields) {
        try {
            verifyFieldsUpdated(fields);
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to verify fields in response after update: " + e);
        }
    }

    @Then("The response status should be 500 INTERNAL SERVER ERROR")
    public void theResponseStatusShouldBeInternalServerError() {
        try {
            verifyStatusInternalServer();
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to verify response status 500 INTERNAL SERVER ERROR : " + e);
        }
    }

    @Then("The response status should be 404 NOT_FOUND")
    public void theResponseStatusShouldBeUnAuthorized(){
        try {
            verifyStatusNotFound();
        } catch (Exception e) {
            Assert.fail("ERROR: Failed to verify response status 401 NOT_FOUND : " + e);
        }
    }


}
