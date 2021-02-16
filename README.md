# AngularTesting

This project is a part of Angular Testing Series which has been published on my medium account

[Angular Testing Series](https://medium.com/@marcinmilewicz)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

# Mutation Testing added to project.

## 1. Dependences:  
```
npm install
npm i --save-dev @stryker-mutator/core  
npm i --save-dev @stryker-mutator/jest-runner  
npm i --save-dev jest-environment-jsdom-sixteen  
```
## 2. Configuration:  
Make sure you set the testRunner option to "jest".  
```
{  
  "testRunner": "jest"  
} 
```
The @stryker-mutator/jest-runner also provides a couple of configurable options using the jest property in your Stryker config:
```
{    
  "jest": {  
    "projectType": "custom",  
    "configFile": "jest.config.js",  
    "config": {  
      "testEnvironment": "jest-environment-jsdom-sixteen"  
    },  
    "enableFindRelatedTests": false,  
  }  
}  
```
## 3. Run:  
stryker run --logLevel trace

references:
https://stryker-mutator.io/docs/
