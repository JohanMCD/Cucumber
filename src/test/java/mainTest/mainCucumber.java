package mainTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features",
				 name= {""},
				 glue = { "cases" }, 
				 plugin = { "html:reports/cucumber-html-report" })
public class mainCucumber {

}
