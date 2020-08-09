package runner;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber-reports", "json:target/cucumber.json"},
        features = {"src/resources/features/"},
        monochrome = true,
        glue = {"stepDefinitions"})

public class StartEngineTest {

}
