package stepDefinitions;


import io.cucumber.java.Before;
import io.restassured.RestAssured;
import utilities.ServiceConstant;

public class Hooks {

    @Before
    public void setUp() {
        RestAssured.baseURI = ServiceConstant.BASE_URI;
    }
}
