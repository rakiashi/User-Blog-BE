**restAPI automation - User Blog**

User Blog backend project is all about verifying the APIs before developing UI, by this we can ensure the behaviors of the APIs
mainly this project covered on verifying email formats from comments of each user posts along with random test scenarios.

**Tools:** 

-Java10
-Maven
-Cucumber-JVM
-JUnit
-Json
-Rest Assured

**Requirements**

In order make this project up and running you need to have following configuration settings :

-SDK configuration under file browser for latest JDK installed in your machine -Once you are able to see java class files are loaded as expected then you are good to go for next step

Usage

The Project is for Functional UI Automation testing , Before running this project read below steps for smooth execution

-To Run in chrome or firefox browser , make sure you have updated in application.properties file under resources folder -To Run in headLess mode by default settings should be true -To Run on desired operating system update os property as Win or Mac respectively -To Run from terminal go to project path as ComputerApplication and run command as mvn clean install -To Run from runner class StartEngine under itRunner package use Run button

Reporting

In this project i have used cucumber reports , which gives more info on each steps by taking screenshots : you can get in this path : \target\site\cucumber-pretty

Test-outputs

-Tested in Windows OS 10 -Tested in Mac OS X -Cross browser testing with Chrome,Firefox and Safari -Tested CT job by configuring in Jenkins (refer cucumber screenshot document)

Observations

-Computer name can be created even with special characters -Duplicate computer names can be created -Sorting is not happening even thou i see there is an option in result table