# A demo Band Website deployed on AWS Beanstalk with continuous deployment pipeline

This repository contains a web application for a Band group built using [React](https://reactjs.com/) and  [Express](https://expressjs.com/), used as a DevOps project using the services of Amazon Web Services. A seamless pipeline that automates the deployment process, from code changes in the local editor to the production. 


## Know about CI/CD 

The main concept of CI/CD involves automating the process of integrating code changes from multiple developers (locally) into a shared repository (Continuous Integration) and then automating the deployment of code changes to various environments(Continuous Delivery/Deployment).


## AWS Services used in the DevOps project 

🔹 **AWS Elastic Beanstalk**: Amazon Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services on familiar web servers.

🔹 **AWS CodeBuild**: AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy.

🔹 **AWS CodePipeline**:  AWS CodePipeline is used to set up a continuous delivery pipeline with source, build, and deploy stages. The pipeline will detect changes in the code stored in your GitHub repository, build the source code using AWS CodeBuild, and then deploy your application to AWS Elastic Beanstalk.

## How it works
![Screenshot 2024-03-27 223219](https://github.com/SagarG2003/aws-elastic-beanstalk-website/assets/113847560/4f609309-43c8-4bd7-9615-805843f23181)





