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

**Usage**

The Project is for Backend API Automation testing using Rest Assured Library with BDD approach
This Framework capable of future enhancement on UI automation along with API testing

**Running command**
mvn clean compile test

**Reporting**

In this project I have used cucumber reports , which gives more info on each steps by taking screenshots : you can get in this path : \target\site\cucumber-pretty

**Observations**

-PUT send request results in success response , where actual posts id is not updated
-POST send request results in 404 error

